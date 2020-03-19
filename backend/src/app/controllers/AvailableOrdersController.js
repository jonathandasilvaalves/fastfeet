import { parseISO, startOfDay, endOfDay, getHours } from 'date-fns';

import * as Yup from 'yup';
import { Op } from 'sequelize';
import Deliverymans from '../models/Deliverymans';
import Orders from '../models/Orders';
import Signatures from '../models/Signatures';

class AvailableOrdersController {
  async index(req, res) {
    const deliveryman = await Deliverymans.findOne({
      where: { id: req.params.id },
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const orders = await Orders.findAll({
      where: {
        deliveryman_id: req.params.id,
        end_date: {
          [Op.ne]: null,
        },
      },
    });

    return res.status(200).json({ orders });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      start_date: Yup.date(),
      end_date: Yup.date(),
      signature_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, deliveryman_id, start_date, signature_id } = req.body;

    const order = await Orders.findOne({ where: { id } });

    if (!order) {
      return res.status(400).json({ error: 'Id Order does not exists' });
    }

    if (start_date) {
      const parsedDate = parseISO(start_date);
      const orders = await Orders.findAll({
        where: {
          deliveryman_id,
          start_date: {
            [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
          },
        },
      });
      if (orders.length > 5) {
        return res
          .status(400)
          .json({ error: 'Your delivery limit has run out today' });
      }
      const hoursRegister = getHours(parseISO(start_date));
      if (hoursRegister < 8 || hoursRegister > 18) {
        return res.status(400).json({ error: 'Registration permission time' });
      }
    }

    if (signature_id) {
      const signature = await Signatures.findOne({
        where: { id: signature_id },
      });

      if (!signature) {
        return res.status(400).json({ error: 'Signature does not exists!' });
      }
    }

    const result = await order.update(req.body);

    return res.json(result);
  }
}

export default new AvailableOrdersController();

import * as Yup from 'yup';
import DeliveryProblems from '../models/DeliveryProblems';
import Orders from '../models/Orders';
import Deliveryman from '../models/Deliverymans';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class DeliveryProblemsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validation fails' });
    }

    const order = await Orders.findOne({ where: { id: req.body.delivery_id } });

    if (!order) {
      return res.status(400).json({ error: 'Order does not exists' });
    }

    const { id, delivery_id, description } = await DeliveryProblems.create(
      req.body
    );

    return res.status(201).json({
      id,
      delivery_id,
      description,
    });
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const problems = await DeliveryProblems.findAll({
      where: {
        delivery_id: req.params.id,
      },
      order: ['id'],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.status(200).json({ problems });
  }

  async delete(req, res) {
    const problem = await DeliveryProblems.findByPk(req.params.id);
    if (!problem) {
      return res.status(400).json({ error: 'Id problem does not exists!' });
    }

    const order = await Orders.findByPk(problem.delivery_id);

    order.canceled_at = new Date();

    await order.save();

    const deliveryman = await Deliveryman.findByPk(order.deliveryman_id);

    await Queue.add(CancellationMail.key, {
      deliveryman,
      order,
    });

    return res.json({ order });
  }
}

export default new DeliveryProblemsController();

import * as Yup from 'yup';
import DeliveryProblems from '../models/DeliveryProblems';
import Orders from '../models/Orders';

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
    const problems = await DeliveryProblems.findAll({
      where: {
        delivery_id: req.params.id,
      },
    });

    return res.status(200).json({ problems });
  }
}

export default new DeliveryProblemsController();

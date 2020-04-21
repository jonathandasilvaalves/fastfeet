import * as Yup from 'yup';
import { Op } from 'sequelize';

import Orders from '../models/Orders';
import Recipient from '../models/Recipients';
import Deliveryman from '../models/Deliverymans';
import DeliverymanFile from '../models/DeliverymanFiles';

import Mail from '../../lib/Mail';

class OrdersController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.findByPk(req.body.recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    const deliveryman = await Deliveryman.findByPk(req.body.deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const order = await Orders.create(req.body);

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova entrega na fila',
      template: 'entrega',
      context: {
        deliveryman: deliveryman.name,
        product: req.body.product,
      },
    });

    return res.json({ order });
  }

  async index(req, res) {
    const { page = 1, name = '', id } = req.query;

    if (id) {
      const orders = await Orders.findAll({
        where: {
          product: {
            [Op.iLike]: `%${name}%`,
          },
          id,
        },
        order: ['id'],
        attributes: [
          'id',
          'recipient_id',
          'deliveryman_id',
          'product',
          'canceled_at',
          'start_date',
          'end_date',
        ],
        limit: 5,
        offset: (page - 1) * 5,
        include: [
          {
            model: Recipient,
            attributes: ['id', 'name', 'state', 'city', 'street', 'cep'],
          },
          {
            model: Deliveryman,
            attributes: ['id', 'name'],
            include: [
              {
                model: DeliverymanFile,
                attributes: ['id', 'name', 'path', 'url'],
              },
            ],
          },
        ],
      });
      return res.json(orders);
    }
    const orders = await Orders.findAll({
      where: {
        product: {
          [Op.iLike]: `%${name}%`,
        },
      },
      order: ['id'],
      attributes: [
        'id',
        'recipient_id',
        'deliveryman_id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
      limit: 5,
      offset: (page - 1) * 5,
      include: [
        {
          model: Recipient,
          attributes: ['id', 'name', 'state', 'city', 'street', 'cep'],
        },
        {
          model: Deliveryman,
          attributes: ['id', 'name'],
          include: [
            {
              model: DeliverymanFile,
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        },
      ],
    });
    return res.json(orders);
  }

  async delete(req, res) {
    const order = await Orders.findByPk(req.params.id);

    if (!order) {
      res.status(400).json({
        error: 'Order does not exists',
      });
    }

    order.canceled_at = new Date();

    await order.save();

    res.json(order);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      product: Yup.string(),
      start_date: Yup.date(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, recipient_id, deliveryman_id, product } = req.body;

    const order = await Orders.findOne({ where: { id } });

    if (!order) {
      return res.status(400).json({ error: 'Id Order does not exists' });
    }

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    if (!product) {
      return res
        .status(400)
        .json({ error: 'The product field is not filled ' });
    }

    const { start_date, end_date } = await order.update(req.body);

    return res.json({
      id,
      recipient_id,
      deliveryman_id,
      product,
      start_date,
      end_date,
    });
  }
}

export default new OrdersController();

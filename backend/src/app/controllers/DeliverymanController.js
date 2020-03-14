import * as Yup from 'yup';

import Deliverymans from '../models/Deliverymans';
import DeliverymanFiles from '../models/DeliverymanFiles';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation is fails' });
    }

    const deliverymanExists = await Deliverymans.findOne({
      where: { email: req.body.email },
    });

    if (deliverymanExists) {
      return res
        .status(400)
        .json({ error: 'Deliveryman exists with this e-mail!' });
    }

    const { id, name, email } = await Deliverymans.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
      name: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, name, email } = req.body;

    const deliveyman = await Deliverymans.findByPk(id);

    if (!deliveyman) {
      return res.status(400).json({ error: 'Deliveyman does not exists' });
    }

    if (email) {
      if (deliveyman.email !== email) {
        const emailExists = await Deliverymans.findOne({ where: { email } });

        if (emailExists) {
          return res
            .status(400)
            .json({ error: 'Deliveryman exists with this e-mail!' });
        }
      }
    }

    await deliveyman.update(req.body);

    const { avatar } = await Deliverymans.findByPk(id, {
      include: [
        {
          model: DeliverymanFiles,
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const deliveryman = await Deliverymans.findAll({
      order: ['name'],
      attributes: ['id', 'name', 'email'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [{ model: DeliverymanFiles, attributes: ['id', 'name'] }],
    });

    return res.json(deliveryman);
  }

  async delete(req, res) {
    const deliveyman = await Deliverymans.findByPk(req.params.id);

    if (!deliveyman) {
      return res.status(400).json({ error: 'Deliveryman does not exists!' });
    }

    await deliveyman.destroy();

    return res.status(200).json({ success: 'Deliveryman deleted' });
  }
}

export default new DeliverymanController();

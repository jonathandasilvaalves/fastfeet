import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipients from '../models/Recipients';

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number()
        .required()
        .min(2),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string()
        .required()
        .max(9),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientsExists = await Recipients.findOne({
      where: { name: req.body.name },
    });

    if (recipientsExists) {
      return res.status(400).json({ error: 'Recipients already exists' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await Recipients.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number().min(2),
      complement: Yup.string(),
      state: Yup.string().min(2),
      city: Yup.string(),
      cep: Yup.string().max(9),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, id } = req.body;
    const recipient = await Recipients.findByPk(id);

    if (name && name !== recipient.name) {
      const recipientsExists = await Recipients.findOne({
        where: { name },
      });

      if (recipientsExists) {
        return res.status(400).json({ error: 'Recipients already exists' });
      }
    }

    const {
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await recipient.update(req.body);

    return res.status(200).json({
      name,
      id,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }

  async index(req, res) {
    const { name } = req.query;

    const resultRecipients = await Recipients.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'cep',
      ],
    });

    return res.json(resultRecipients);
  }
}

export default new RecipientsController();

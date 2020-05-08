import Deliverymans from '../models/Deliverymans';

class AvailableDeliverymanController {
  async index(req, res) {
    const deliveryman = await Deliverymans.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'name', 'email'],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    return res.json({ deliveryman });
  }
}

export default new AvailableDeliverymanController();

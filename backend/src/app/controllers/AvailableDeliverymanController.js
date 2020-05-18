import Deliverymans from '../models/Deliverymans';
import DeliverymanFiles from '../models/DeliverymanFiles';

class AvailableDeliverymanController {
  async index(req, res) {
    const deliveryman = await Deliverymans.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'name', 'email', 'created_at'],
      include: [
        {
          model: DeliverymanFiles,
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    return res.json({ deliveryman });
  }
}

export default new AvailableDeliverymanController();

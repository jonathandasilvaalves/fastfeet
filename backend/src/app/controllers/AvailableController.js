import Deliverymans from '../models/Deliverymans';
import Orders from '../models/Orders';

class AvailableController {
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
        canceled_at: null,
        end_date: null,
      },
    });

    return res.status(200).json({ orders });
  }
}

export default new AvailableController();

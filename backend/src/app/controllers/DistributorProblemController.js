import DeliveryProblems from '../models/DeliveryProblems';
import Orders from '../models/Orders';

class DistributorProblemController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const problems = await Orders.findAll({
      order: ['id'],
      limit: 5,
      offset: (page - 1) * 5,
      include: [
        {
          model: DeliveryProblems,
          required: true,
        },
      ],
    });

    return res.json({ problems });
  }
}

export default new DistributorProblemController();

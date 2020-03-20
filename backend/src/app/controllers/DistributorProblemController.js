import DeliveryProblems from '../models/DeliveryProblems';
import Orders from '../models/Orders';

class DistributorProblemController {
  async index(req, res) {
    const problems = await Orders.findAll({
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

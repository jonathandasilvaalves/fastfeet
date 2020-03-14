import DeliverymanFiles from '../models/DeliverymanFiles';

class FileDeliverymanController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await DeliverymanFiles.create({
      name,
      path,
    });
    return res.json(file);
  }
}

export default new FileDeliverymanController();

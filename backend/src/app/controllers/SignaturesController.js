import Signatures from '../models/Signatures';

class SignaturesController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await Signatures.create({
      name,
      path,
    });
    return res.json(file);
  }
}

export default new SignaturesController();

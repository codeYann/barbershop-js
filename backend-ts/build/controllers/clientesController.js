"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);

function encrypt(text) {
  const cipher = _crypto2.default.createCipheriv(
    "aes-256-ccm",
    "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3",
    _crypto2.default.randomBytes(16),
  );
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return encrypted.toString("hex");
}

 class ClienteController {
   async index(req, res) {
    try {
      return res.status(200).json({
        message: "status 200",
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "error" });
    }
  }
   async store(req, res) {
    try {
      const { id, nome, email, senha, nascimento } = req.body;
      return res.json({ id, nome, email, senha, nascimento });
    } catch (error) {
      return res.status(404).json({ Error: "Error on send data" });
    }
  }
} exports.default = ClienteController;

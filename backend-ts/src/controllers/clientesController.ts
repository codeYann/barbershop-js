import { Request, Response } from "express";
import crypto from "crypto";

function encrypt(text: string): string {
  const cipher = crypto.createCipheriv(
    "aes-256-ccm",
    "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3",
    crypto.randomBytes(16),
  );
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return encrypted.toString("hex");
}

export default class ClienteController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({
        message: "status 200",
      });
    } catch (error: any) {
      console.log(error);
      return res.status(404).json({ message: "error" });
    }
  }
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { id, nome, email, senha, nascimento } = req.body;
      return res.json({ id, nome, email, senha, nascimento });
    } catch (error: any) {
      return res.status(404).json({ Error: "Error on send data" });
    }
  }
}

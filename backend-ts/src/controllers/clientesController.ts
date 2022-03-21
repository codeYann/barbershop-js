import {Request, Response} from "express";
import crypto from  "crypto";

function encrypt(text: string): string {
  const cipher = crypto.createCipheriv(
    "aes-256-ccm",
    "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3",
    crypto.randomBytes(16)
  );
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return encrypted.toString("hex");
}

export class ClienteController {
  public async index(req: Request, res: Response): Promise<any> {
    try {

    } catch (error: any) {
      console.log(error)
    }
  }
}

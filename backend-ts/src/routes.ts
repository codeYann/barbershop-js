import { Request, Response, Router } from "express";
import clienteController from "./controllers/clientesController";

class Routes {
  public router: Router;

  public constructor() {
    this.router = Router();
    this.getRoutes();
  }

  public getRoutes(): void {
    this.router.get("/", (req, res) => res.json({ ola: "mundo" }));
    this.router.get("/clientes", new clienteController().index);
  }

  public postRoutes(): void {}
}

export default new Routes().router;

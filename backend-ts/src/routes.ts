import {Request, Response, Router} from 'express';
import clienteController from './controllers/clientesController';

class Routes {
  public router: Router;

  public constructor() {
    this.router = Router();
    this.getRoutes();
  }

  public getRoutes(): void {
    this.router.get('/', (req: Request, res: Response) => res.json({}));
    this.router.get('/clientes', new clienteController().index);
  }
}

export default new Routes().router;

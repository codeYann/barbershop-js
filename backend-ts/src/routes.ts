import {Request, Response, Router} from 'express';
import clienteController from './controllers/clientesController';

const router = Router();

router.get('/', (req: Request, res: Response) => res.json({}));
router.get('/clientes', new clienteController().index);

export default router;

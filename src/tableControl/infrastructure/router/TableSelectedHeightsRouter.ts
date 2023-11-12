import {Router} from 'express';
import { authMiddleware } from '../../../shared/authentification/Middlewares/AuthTokenRequired';
import { TableSelectedHeightsController } from '../controller/TableSelectedHeightsController'
export const tableHeightsRouter = Router();
const tableHeightsController = new TableSelectedHeightsController();
tableHeightsRouter.post('/', authMiddleware, (req, res)=> {
  tableHeightsController.commitSelectedHeights(req, res);
})
tableHeightsRouter.get('/all',authMiddleware, tableHeightsController.getHeights);


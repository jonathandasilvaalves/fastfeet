import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';
import FileDeliverymanController from './app/controllers/FileDeliverymanController';
import DeliverymanController from './app/controllers/DeliverymanController';
import SignatureController from './app/controllers/SignaturesController';
import OrdersController from './app/controllers/OrdersController';
import AvailableOrdersController from './app/controllers/AvailableOrdersController';
import DeliveryProblemsController from './app/controllers/DeliveryProblemsController';
import DistributorProblemController from './app/controllers/DistributorProblemController';
import AvailableDeliverymanController from './app/controllers/AvailableDeliverymanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.get('/deliveryman/session/:id', AvailableDeliverymanController.index);
routes.get(
  '/deliveryman/:id/deliveries/:status?',
  AvailableOrdersController.index
);
routes.put('/deliveryman/order', AvailableOrdersController.update);
routes.post('/signature', upload.single('file'), SignatureController.store);

routes.post('/delivery/problems', DeliveryProblemsController.store);
routes.get('/delivery/:id/problems', DeliveryProblemsController.index);

routes.use(authMiddleware);

routes.post('/recipients', RecipientsController.store);
routes.put('/recipients', RecipientsController.update);
routes.get('/recipients', RecipientsController.index);

routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);
routes.get('/deliveryman', DeliverymanController.index);

routes.get('/orders/list', DistributorProblemController.index);
routes.delete(
  '/problem/:id/cancel-delivery',
  DeliveryProblemsController.delete
);

routes.post('/files', upload.single('file'), FileDeliverymanController.store);

routes.post('/orders', OrdersController.store);
routes.get('/orders', OrdersController.index);
routes.delete('/orders/:id', OrdersController.delete);
routes.put('/orders', OrdersController.update);

export default routes;

import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';
import FileDeliverymanController from './app/controllers/FileDeliverymanController';
import DeliverymanController from './app/controllers/DeliverymanController';
import SignatureController from './app/controllers/SignaturesController';
import OrdersController from './app/controllers/OrdersController';
import AvailableController from './app/controllers/AvailableController';
import AvailableOrdersController from './app/controllers/AvailableOrdersController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.get('/deliveryman/:id', AvailableController.index);
routes.get('/deliveryman/:id/deliveries', AvailableOrdersController.index);
routes.put('/deliveryman/order', AvailableOrdersController.update);
routes.post('/signature', upload.single('file'), SignatureController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientsController.store);
routes.put('/recipients', RecipientsController.update);
routes.get('/recipients', RecipientsController.index);

routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);
routes.get('/deliveryman', DeliverymanController.index);

routes.post('/files', upload.single('file'), FileDeliverymanController.store);

routes.post('/orders', OrdersController.store);
routes.get('/orders', OrdersController.index);
routes.delete('/orders/:id', OrdersController.delete);
routes.put('/orders', OrdersController.update);

export default routes;

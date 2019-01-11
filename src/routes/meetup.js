import { Router } from 'express';
import meetupController from '../controllers/meetupController';
const routes = Router();

routes.post('/api/v1/meetups', meetupController.create);
routes.get('/api/v1/meetups', meetupController.getAll);
routes.get('/api/v1/meetups/:id', meetupController.getOne);
routes.put('/api/v1/meetups/:id', meetupController.update);
routes.delete('/api/v1/meetups/:id', meetupController.delete);

export default routes;
import { Router } from 'express';
import rsvpController from '../controllers/rsvpController';
const routes = Router();

routes.post('/api/v1/rsvps', rsvpController.create);
routes.get('/api/v1/rsvps', rsvpController.getAll);
routes.get('/api/v1/rsvps/:id', rsvpController.getOne);
routes.put('/api/v1/rsvps/:id', rsvpController.update);
routes.delete('/api/v1/rsvps/:id', rsvpController.delete);

export default routes;
import { Router } from 'express';
import rsvpController from '../controllers/rsvpController';
const routes = Router();

routes.post('/api/v1/rsvps', rsvpController.createRsvp);
routes.get('/api/v1/rsvps', rsvpController.getAllRsvp);
routes.get('/api/v1/rsvps/:id', rsvpController.getOneRsvp);
routes.put('/api/v1/rsvps/:id', rsvpController.updateRsvp);
routes.delete('/api/v1/rsvps/:id', rsvpController.deleteRsvp);

export default routes;
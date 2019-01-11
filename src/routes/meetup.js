import { Router } from 'express';
import meetupController from '../controllers/meetupController';
const routes = Router();

routes.post('/api/v1/meetups', meetupController.createMeetup);
routes.get('/api/v1/meetups', meetupController.getAllMeetup);
routes.get('/api/v1/meetups/:id', meetupController.getOneMeetup);
routes.put('/api/v1/meetups/:id', meetupController.updateMeetup);
routes.delete('/api/v1/meetups/:id', meetupController.deleteMeetup);

export default routes;
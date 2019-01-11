import { Router } from 'express';
import questionController from '../controllers/questionController.js';
const routes = Router();

routes.post('/api/v1/questions', questionController.create);
routes.get('/api/v1/questions', questionController.getAll);
routes.get('/api/v1/questions/:id', questionController.getOne);
routes.put('/api/v1/questions/:id', questionController.update);
routes.delete('/api/v1/questions/:id', questionController.delete);
routes.patch('/api/v1/questions/:id/upvote', questionController.upvote);

export default routes;
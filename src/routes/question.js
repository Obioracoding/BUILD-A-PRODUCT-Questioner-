import { Router } from 'express';
import questionController from '../controllers/questionController.js';
const routes = Router();

routes.post('/api/v1/questions', questionController.createQuestion);
routes.get('/api/v1/questions', questionController.getAllQuestion);
routes.get('/api/v1/questions/:id', questionController.getOneQuestion);
routes.put('/api/v1/questions/:id', questionController.updateQuestion);
routes.delete('/api/v1/questions/:id', questionController.deleteQuestion);
routes.patch('/api/v1/questions/:id/upvote', questionController.upvoteQuestion);

export default routes;
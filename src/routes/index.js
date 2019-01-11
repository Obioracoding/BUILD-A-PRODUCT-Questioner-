import { Router } from 'express';
import rsvp from './rsvp';
import meetup from './meetup';
import question from './question';

const routes = Router();

routes.use('/api/v1', rsvp);
routes.use('/api/v1', meetup)
routes.use('/api/v1', question);

export default routes;


// server.js
import express from 'express';
import Meetup from './src/controllers/Meetup';
import Question from './src/controllers/Question';
import Rsvp from './src/controllers/Rsvp';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})

app.post('/api/v1/meetups', Meetup.create);
app.get('/api/v1/meetups', Meetup.getAll);
app.get('/api/v1/meetups/:id', Meetup.getOne);
app.put('/api/v1/meetups/:id', Meetup.update);
app.delete('/api/v1/meetups/:id', Meetup.delete);

app.post('/api/v1/questions', Question.create);
app.get('/api/v1/questions', Question.getAll);
app.get('/api/v1/questions/:id', Question.getOne);
app.put('/api/v1/questions/:id', Question.update);
app.delete('/api/v1/questions/:id', Question.delete);

app.post('/api/v1/rsvps', Rsvp.create);
app.get('/api/v1/rsvps', Rsvp.getAll);
app.get('/api/v1/rsvps/:id', Rsvp.getOne);
app.put('/api/v1/rsvps/:id', Rsvp.update);
app.delete('/api/v1/rsvps/:id', Rsvp.delete);


app.listen(3000)
console.log('app running on port ', 3000);
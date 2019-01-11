// server.js
import express from 'express';
import routes from './src/routes';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', routes);

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})

app.listen(3000)
console.log('app running on port ', 3000);

export default app;
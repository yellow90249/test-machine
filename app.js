import express from 'express';
// import cors from 'cors';

const app = express();
// app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/apple', (req, res) => {
  res.send('cool apple');
});

app.get('/count', (req, res) => {
  res.send('sexy count');
});

app.listen(3000, () => {
  console.log('Server starts listening on port 3000');
});

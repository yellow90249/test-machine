import express from 'express';
// import cors from 'cors';

const app = express();
// app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  console.log('Server starts listening on port 3000');
});

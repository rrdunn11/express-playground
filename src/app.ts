import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../', `.env.${process.env.NODE_ENV}`) });
const app = express();

app.get('/', (req, res, next) => {
  res.send('Testing');
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});

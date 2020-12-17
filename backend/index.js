import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import notificationRoutes from './routes/notification.js';
import coinRoutes from './routes/coin.js';
import { collectCoins } from './controllers/coin.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/notification', notificationRoutes);
app.use('/coin', coinRoutes);

// Ignore this pls xd
const cryptos = [1, 1027, 328];
const fiats = [2790, 2781, 3565];

try {
  for (const e1 of cryptos) {
    for (const e2 of fiats) {
      // await collectCoins(e1, e2);
    }
  }
} catch (error) {
  console.log(error);
}

const PORT = process.env.PORT || 5000;

mongoose;
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.error(error.message));

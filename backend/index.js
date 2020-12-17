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

// for testing with 3 cryptos
const cryptos = [1, 1027, 328];

setInterval(async () => {
  for (const e1 of cryptos) {
    await collectCoins(e1);
  }
}, 5000);

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

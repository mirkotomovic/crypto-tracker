import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import notificationRoutes from './routes/notification.js';
import coinRoutes from './routes/coin.js';
import { getCoin, collectCoins } from './controllers/coin.js';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/notification', notificationRoutes);
app.use('/coin', coinRoutes);

app.get('/', (req, res) => res.send('Hello!'));

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

const PORT = process.env.PORT || 5000;
let updating = 0;
io.on('connection', async (socket) => {
  console.log('New client connected');
  updating++;

  try {
    const response = await getCoin();
    socket.emit('coinsUpdate', response);
  } catch (error) {
    console.log(error);
  }

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    updating--;
  });
});

setInterval(async () => await getApiAndEmit(), 10000);

const getApiAndEmit = async () => {
  try {
    if (updating > 0) {
      const cryptos = [1, 1027, 328];

      for (const e1 of cryptos) {
        await collectCoins(e1);
      }
    }
    const response = await getCoin();
    io.sockets.emit('coinsUpdate', response);
  } catch (error) {
    console.log(error);
  }
};

mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    //app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    httpServer.listen(PORT, () =>
      console.log(`Server running on port: ${PORT}`)
    );
  })
  .catch((error) => console.error(error.message));

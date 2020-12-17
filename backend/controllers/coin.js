import mongoose from 'mongoose';
import axios from 'axios';
import Coin from '../models/coin.js';

export const getCoin = async (req, res) => {
  try {
    const coin = await Coin.find().sort({ name: 1, _id: 1 });
    res.status(200).json(coin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const collectCoins = async (cryptoId) => {
  try {
    const coin = await getLatestPrice(cryptoId);

    const query = { cmc_id: cryptoId };
    await Coin.exists(query, async (error, result) => {
      if (error) {
        console.log(error);
      } else {
        if (result) {
          await Coin.updateOne(
            query,
            { value: coin.value, updatedAt: new Date() },
            () => {}
          );
        } else {
          const newCoin = new Coin(coin);
          await newCoin.save();
        }
      }
    });
  } catch (error) {
    console.log({ message: error.message });
  }
};

const getLatestPrice = async (cryptoId) => {
  const url =
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';

  const headers = {
    'X-CMC_PRO_API_KEY': process.env.CMC_KEY,
    Accept: 'application/json',
    'Accept-Encoding': 'deflate, gzip',
    'Access-Control-Allow-Origin': '*',
  };

  const params = {
    id: cryptoId,
    convert_id: 2790, // value for euro
  };

  const result = await axios
    .get(url, { headers: headers, params: params })
    .then(({ data }) => data);

  return {
    name: result.data[cryptoId].name,
    cmc_id: cryptoId,
    value: result.data[cryptoId].quote[2790].price,
  };
};

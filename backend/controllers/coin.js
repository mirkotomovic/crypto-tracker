import mongoose from 'mongoose';
import axios from 'axios';
import Coin from '../models/coin.js';

export const getCoin = async (req, res) => {
  try {
    const query = {
      fiat_cmc_id: req.query.fiat,
    };
    const coin = await Coin.find(query).sort({ name: 1, _id: 1 });
    res.status(200).json(coin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const collectCoins = async (cryptoId, fiatId) => {
  try {
    const coin = await getLatestPrice(cryptoId, fiatId);

    const query = { cmc_id: cryptoId, fiat_cmc_id: fiatId };
    await Coin.exists(query, async (error, result) => {
      if (error) {
        console.log(error);
      } else {
        if (result) {
          await Coin.updateOne(
            query,
            { value: coin.value },
            (err, result) => {}
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

const getLatestPrice = async (cryptoId, fiatId) => {
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
    convert_id: fiatId,
  };

  const result = await axios
    .get(url, { headers: headers, params: params })
    .then(({ data }) => data);

  return {
    name: result.data[cryptoId].name,
    cmc_id: cryptoId,
    value: result.data[cryptoId].quote[fiatId].price,
    fiat_cmc_id: fiatId,
  };
};

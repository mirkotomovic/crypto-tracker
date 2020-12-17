import axios from 'axios';

const url = 'http://localhost:5000/coin';

export const getCoins = (fiat) => axios.get(url, { params: { fiat: fiat } });

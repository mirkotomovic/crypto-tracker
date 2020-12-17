import * as api from '../api/coin.js';

export const getCoins = (fiat) => async (dispatch) => {
  try {
    const { data } = await api.getCoins(fiat);
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.error(error);
  }
};

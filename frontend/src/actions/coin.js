export const getCoins = (socket) => async (dispatch) => {
  try {
    // const { data } = await api.getCoins();
    socket.on('coinsUpdate', (data) => {
      dispatch({ type: 'FETCH_ALL', payload: data });
    });
  } catch (error) {
    console.error(error);
  }
};

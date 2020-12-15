import * as api from '../api';

// Action creators
export const getNotifications = () => async (dispatch) => {
  try {
    const { data } = await api.getNotifications();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.error(error);
  }
};

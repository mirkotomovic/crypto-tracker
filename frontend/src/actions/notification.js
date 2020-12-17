import * as api from '../api/notification.js';

// Action creators
export const getNotifications = () => async (dispatch) => {
  try {
    const { data } = await api.getNotifications();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createNotification = (notification) => async (dispatch) => {
  try {
    const { data } = await api.createNotification(notification);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.error(error);
  }
};

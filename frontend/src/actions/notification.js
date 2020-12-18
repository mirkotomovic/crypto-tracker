import * as api from '../api/notification.js';

// Action creators
export const getNotifications = (owner) => async (dispatch) => {
  try {
    const { data } = await api.getNotifications(owner);
    dispatch({ type: 'FETCH', payload: data });
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

export const deleteNotification = (id) => async (dispatch) => {
  try {
    await api.deleteNotification(id);
    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const updateNotification = (id, notification) => async (dispatch) => {
  try {
    const { data } = await api.updateNotification(id, notification);
    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.error(error);
  }
};

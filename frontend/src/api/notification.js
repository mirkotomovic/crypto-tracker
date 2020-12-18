import axios from 'axios';

const url = 'https://crypto-tracker-cmc.herokuapp.com/notification';

export const getNotifications = (owner) =>
  axios.get(url, { params: { owner: owner } });
export const createNotification = (notification) =>
  axios.post(url, notification);
export const updateNotification = (id, updatedNotification) =>
  axios.patch(`${url}/${id}`, updatedNotification);
export const deleteNotification = (id) => axios.delete(`${url}/${id}`);

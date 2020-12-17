import axios from 'axios';

const url = 'http://localhost:5000/notification';

export const getNotifications = () => axios.get(url);
export const createNotification = (notification) =>
  axios.post(url, notification);

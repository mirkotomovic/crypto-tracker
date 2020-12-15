/* eslint-disable import/no-anonymous-default-export */
export default (notifications = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    default:
      return notifications;
  }
};

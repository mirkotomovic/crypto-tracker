/* eslint-disable import/no-anonymous-default-export */
export default (notifications = [], action) => {
  switch (action.type) {
    case 'FETCH':
      return action.payload;
    case 'CREATE':
      return [...notifications, action.payload];
    case 'UPDATE':
      return notifications.map((notification) =>
        notification._id === action.payload._id ? action.payload : notification
      );
    case 'DELETE':
      return notifications.filter(
        (notification) => notification._id !== action.payload
      );
    default:
      return notifications;
  }
};

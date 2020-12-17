/* eslint-disable import/no-anonymous-default-export */
export default (coins = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    default:
      return coins;
  }
};

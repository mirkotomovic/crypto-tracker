import { combineReducers } from 'redux';
import notification from './notification';
import coin from './coin';

export default combineReducers({
  notification,
  coin,
});

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Widget from './Widget/Widget';
import AlertForm from './AlertForm/AlertForm';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import {
  getNotifications,
  deleteNotification,
} from '../../../actions/notification';

import './CoinDetails.css';

const CoinDetails = ({ coin }) => {
  const [currentNotificationId, setCurrentNotificationId] = useState(null);
  const [cookies] = useCookies(['user']);
  const dispatch = useDispatch();
  const notifications = useSelector((state) =>
    state.notification.filter((not) => coin.cmc_id === not.cmc_id)
  );

  const sendNotification = (coin, t) => {
    new Notification(`${t}`, {
      body: `${coin.name}`,
    });
  };

  useEffect(() => {
    if (Notification.permission === 'granted') {
      notifications.forEach((element) => {
        if (element.threshold < coin.value && !element.floor) {
          sendNotification(coin, element.threshold);
          dispatch(deleteNotification(element._id));
        }
        if (element.threshold > coin.value && element.floor) {
          sendNotification(coin, element.threshold);
          dispatch(deleteNotification(element._id));
        }
      });
    } else if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (Notification.permission === 'granted') {
          notifications.forEach((element) => {
            if (element.threshold < coin.value && !element.floor) {
              sendNotification(coin, element.threshold);
              dispatch(deleteNotification(element._id));
            }
            if (element.threshold > coin.value && element.floor) {
              sendNotification(coin, element.threshold);
              dispatch(deleteNotification(element._id));
            }
          });
        }
        console.log(permission);
      });
    }
  }, [notifications, coin, dispatch]);

  useEffect(() => {
    dispatch(getNotifications(cookies.user));
  }, [currentNotificationId, dispatch, cookies.user]);

  if (!coin) {
    return <h1>Loading...</h1>;
  }

  return (
    <details>
      <summary>
        <b>{coin.name}</b>{' '}
        <span style={{ float: 'right' }}>{coin.value} €</span>
      </summary>
      <div className='details-content'>
        <Widget crypto={coin.name} />
        <div className='test'>
          <AlertForm
            coin={coin}
            currentNotificationId={currentNotificationId}
            setCurrentNotificationId={setCurrentNotificationId}
          />
          <ul ariaLabel={`Alerts for ${coin.name}`}>
            {notifications.map((notification) => (
              <li key={notification._id}>
                <FaEdit
                  style={{ margin: '0px 5px' }}
                  onClick={() => setCurrentNotificationId(notification._id)}
                />
                {notification.threshold}
                {'€ '}
                <FaTrash
                  className='close'
                  onClick={() => dispatch(deleteNotification(notification._id))}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
};

export default CoinDetails;

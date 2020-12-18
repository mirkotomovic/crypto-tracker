import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNotification,
  updateNotification,
} from '../../../../actions/notification';
import { useCookies } from 'react-cookie';

import './AlertForm.css';

const AlertForm = ({
  coin,
  currentNotificationId,
  setCurrentNotificationId,
}) => {
  const [cookies] = useCookies(['user']);
  const dispatch = useDispatch();

  const [notification, setNotification] = useState({
    crypto: coin.name,
    cmc_id: coin.cmc_id,
    threshold: 0,
    owner: cookies.user,
    floor: false,
  });
  const tmpNotification = useSelector((state) =>
    currentNotificationId
      ? state.notification.find((notif) => notif._id === currentNotificationId)
      : null
  );
  useEffect(() => {
    if (currentNotificationId) {
      setNotification(tmpNotification);
    }
  }, [currentNotificationId, tmpNotification]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentNotificationId) {
      dispatch(createNotification(notification));

      setNotification({
        ...notification,
        threshold: 0,
        owner: cookies.user,
        floor: false,
      });
    } else {
      dispatch(updateNotification(currentNotificationId, notification));

      setNotification({
        ...notification,
        threshold: 0,
        owner: cookies.user,
        floor: false,
      });
      setCurrentNotificationId(null);
    }
  };

  return (
    <form className='alert-form' onSubmit={handleSubmit}>
      <h1>Create notification:</h1>
      <div className='input-group'>
        <label htmlFor='threshold'>Threshold</label>
        <input
          type='number'
          name='threshold'
          min='0'
          value={notification.threshold}
          onChange={(e) =>
            setNotification({ ...notification, threshold: e.target.value })
          }
        />
      </div>
      <div className='input-group'>
        <label htmlFor='floor'>Falling below threshold</label>
        <input
          type='checkbox'
          id={`floor${coin._id}`}
          checked={notification.floor}
          onChange={(e) =>
            setNotification({ ...notification, floor: !notification.floor })
          }
        ></input>
      </div>
      <div>
        <input type='submit' value='Send This' />
      </div>
    </form>
  );
};

export default AlertForm;

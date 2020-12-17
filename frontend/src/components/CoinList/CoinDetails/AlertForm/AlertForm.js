import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNotification } from '../../../../actions/notification';

import './AlertForm.css';

const AlertForm = ({ fiat, cryptoName, user }) => {
  const dispatch = useDispatch();

  const [notification, setNotification] = useState({
    crypto: cryptoName,
    threshold: 0,
    owner: user, // TODO: promeni u state.owner
    floor: false,
    fiat: fiat, // TODO: state.fiat
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNotification(notification));
    setNotification({
      threshold: 0,
      owner: 'mirko', // TODO: promeni u state.owner
      floor: false,
      fiat: '', // TODO: state.fiat
    });
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
          value={setNotification.threshold}
          onChange={(e) =>
            setNotification({ ...notification, threshold: e.target.value })
          }
        />
      </div>
      <div className='input-group'>
        <label htmlFor='floor'>Floor value</label>
        <input
          type='checkbox'
          id='floor'
          value={setNotification.floor}
          onChange={(e) =>
            setNotification({ ...notification, floor: e.target.value })
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

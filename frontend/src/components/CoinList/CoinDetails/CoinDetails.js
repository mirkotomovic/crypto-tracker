import React from 'react';

import Widget from './Widget/Widget';
import AlertForm from './AlertForm/AlertForm';
import { FaEdit, FaTrash } from 'react-icons/fa';

import './CoinDetails.css';

const CoinDetails = ({ coin, fiat, notifications }) => {
  if (!coin) {
    return <h1>Loading...</h1>;
  }

  return (
    <details>
      <summary>
        <b>{coin.name}</b> <span style={{ float: 'right' }}>{coin.value}</span>
      </summary>
      <div className='details-content'>
        <Widget />
        <div className='test'>
          <AlertForm />
          <ul aria-label='Alerts for '>
            <li>
              <FaEdit style={{ margin: '0px 5px' }} />
              Test <FaTrash className='close' />
            </li>
          </ul>
        </div>
      </div>
    </details>
  );
};

export default CoinDetails;

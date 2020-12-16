import React from 'react';
import Widget from './Widget/Widget';
import AlertForm from './AlertForm/AlertForm';
import { FaTrash } from 'react-icons/fa';

import './CoinDetails.css';

const CoinDetails = () => {
  return (
    <details>
      <summary>
        <b>Bitcoin</b>
      </summary>
      <div className='details-content'>
        <Widget />
        <div className='test'>
          <AlertForm />
          <ul ariaLabel='Alerts for '>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
            <li>
              Test <FaTrash className='close' />
            </li>
          </ul>
        </div>
      </div>
    </details>
  );
};

export default CoinDetails;

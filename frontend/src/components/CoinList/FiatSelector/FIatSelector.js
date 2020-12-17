import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../../../actions/coin';

import './FiatSelector.css';

const FIatSelector = ({ fiat, setFiat }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className='select'>
        <select
          name='slct'
          id='slct'
          onChange={(e) => {
            setFiat(e.target.value);
            dispatch(getCoins(e.target.value));
          }}
        >
          <option defaultValue value='2790'>
            Euro
          </option>
          <option value='2781'>Dolar</option>
          <option value='3565'>Dinar</option>
        </select>
      </div>
    </>
  );
};

export default FIatSelector;
// const cryptos = [
//   { name: 'Bitcoin', id: 859, cmcid: 1 },
//   { name: 'Ethereum', id: 145, cmcid: 1027 },
//   { name: 'Monero', id: 6, cmcid: 328 },
// ];

// const fiats = [
//    { name: 'Euro', id: 1506, cmcid: 2790 },
//   { name: 'Dolar', id: 1505, cmcid: 2781 },
//   { name: 'Dinar', id: 3256, cmcid: 3565 },
// ];

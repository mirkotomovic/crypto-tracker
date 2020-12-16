import React from 'react';
import CoinDetails from './CoinDetails/CoinDetails';
import FiatSelector from './FiatSelector/FIatSelector';
import './CoinList.css';

const CoinList = () => {
  return (
    <>
      <FiatSelector />
      <section className='coin-list'>
        <CoinDetails />
        <CoinDetails />
        <CoinDetails />
      </section>
    </>
  );
};

export default CoinList;

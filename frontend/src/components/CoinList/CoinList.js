import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNotifications } from '../../actions/notification';
import CoinDetails from './CoinDetails/CoinDetails';
import FiatSelector from './FiatSelector/FIatSelector';
import './CoinList.css';

const CoinList = () => {
  const coin = useSelector((state) => state.coin);
  const [fiat, setFiat] = useState(2790);
  console.log({ coin: coin });
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  return (
    <>
      <FiatSelector fiat={fiat} setFiat={setFiat} />
      {coin ? (
        <section className='coin-list'>
          <CoinDetails coin={coin[0]} fiat={fiat} />
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default CoinList;

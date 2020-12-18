import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNotifications } from '../../actions/notification';
import CoinDetails from './CoinDetails/CoinDetails';
import './CoinList.css';

const CoinList = () => {
  const coins = useSelector((state) => state.coin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  return (
    <>
      {coins ? (
        <section className='coin-list'>
          {coins.map((coin) => (
            <CoinDetails key={coin._id} coin={coin} />
          ))}
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default CoinList;

import React from 'react';
import './Widget.css';

const Widget = ({ crypto }) => {
  const cryptos = {
    Bitcoin: 859,
    Ethereum: 145,
    Monero: 6,
  };
  return (
    <div className='widget-container'>
      <div className='widget-content'>
        <iframe
          src={`https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=${cryptos[crypto]}&pref_coin_id=1506`}
          scrolling='auto'
          className='widget-iframe'
          title={crypto}
        ></iframe>
      </div>
      <div className='widget-footer'>
        <a
          href='https://coinlib.io'
          target='_blank'
          rel='noreferrer'
          className='widget-copyright-link'
        >
          Cryptocurrency Prices
        </a>
        &nbsp;by Coinlib
      </div>
    </div>
  );
};

export default Widget;

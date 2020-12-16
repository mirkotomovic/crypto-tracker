import React from 'react';
import './Widget.css';

const Widget = () => {
  return (
    <div className='widget-container'>
      <div className='widget-content'>
        <iframe
          src='https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505'
          scrolling='auto>'
          className='widget-iframe'
        ></iframe>
      </div>
      <div className='widget-footer'>
        <a
          href='https://coinlib.io'
          rel='noreferrer'
          target='_blank'
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

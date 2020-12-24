import React from 'react';
import './Widget.css';

const Widget = ({ crypto }) => {
  const cryptos = {
    Bitcoin: 859,
    Ethereum: 145,
    Monero: 6,
  };
  return (
    <div
      style={{
        height: '560px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        boxSizing: 'border-box',
        border: '1px solid #56667f',
        borderRadius: '4px',
        textAlign: 'right',
        lineHeight: '14px',
        fontSize: '12px',
        fontFeatureSettings: 'normal',
        textSizeAdjust: '100%',
        boxShadow: 'inset 0 -20px 0 0 #56667f',
        padding: '1px',
        padding: '0px',
        margin: '0px',
        width: '100%',
      }}
    >
      <div className='widget-content'>
        <iframe
          // src={`https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=${cryptos[crypto]}&pref_coin_id=1506`}
          scrolling='auto'
          className='widget-iframe'
          title={crypto}
        ></iframe>
      </div>
      <div
        style={{
          color: '#ffffff',
          lineHeight: '14px',
          fontWeight: '400',
          fontSize: '11px',
          boxSizing: 'border-box',
          padding: '2px 6px',
          width: '100%',
          fontFamily: 'Verdana, Tahoma, Arial, sans-serif',
        }}
      >
        <a
          href='https://coinlib.io'
          target='_blank'
          rel='noreferrer'
          style={{
            fontWeight: '500',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '11px',
          }}
        >
          Cryptocurrency Prices
        </a>
        &nbsp;by Coinlib
      </div>
    </div>
  );
};

export default Widget;

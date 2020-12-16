import React from 'react';
import './FiatSelector.css';

const FIatSelector = () => {
  return (
    <div className='select'>
      <select name='slct' id='slct'>
        <option selected disabled>
          Choose fiat currency
        </option>
        <option value='1'>Pure CSS</option>
        <option value='2'>No JS</option>
        <option value='3'>Nice!</option>
      </select>
    </div>
  );
};

export default FIatSelector;

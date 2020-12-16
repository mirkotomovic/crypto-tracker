import React from 'react';
import './AlertForm.css';
const AlertForm = () => {
  return (
    <form class='alert-form'>
      <h1>Create notification:</h1>
      <div className='input-group'>
        <label htmlFor='threshold'>Threshold</label>
        <input type='number' name='threshold' min='0' />
      </div>
      <div className='input-group'>
        <label htmlFor='floor'>Floor value</label>
        <input type='checkbox' id='floor'></input>
      </div>
      <div>
        <input type='submit' value='Send This' />
      </div>
    </form>
  );
};

export default AlertForm;

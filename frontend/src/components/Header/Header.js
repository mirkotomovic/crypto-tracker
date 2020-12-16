import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SiBitcoin } from 'react-icons/si';

import './Header.css';

const Header = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className='header-container'>
      <SiBitcoin className='logo' title='bitcoin logo' size='2rem' />
      <nav className='navbar'>
        <button className='toggle-button' onClick={() => setToggle(!toggle)}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </button>
        <ul className={`navbar-items ${toggle ? 'active' : ''}`}>
          <li className='navbar-link'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='navbar-link'>
            <NavLink to='/alerts'>Alerts Mirko</NavLink>
          </li>
          <li className='navbar-link'>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

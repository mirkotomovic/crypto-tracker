import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SiBitcoin } from 'react-icons/si';
import { useCookies } from 'react-cookie';

import './Header.css';

const Header = () => {
  const [cookies] = useCookies(['user']);
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
            <NavLink to='/'>Alerts {cookies.user}</NavLink>
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

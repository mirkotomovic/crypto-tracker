import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import CoinList from './components/CoinList/CoinList';
import { getCoins } from './actions/coin';
import './App.css';

function App() {
  const [user, setUser] = useState('Mirko');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins(2790));
  }, []);

  return (
    <Router>
      <div className='app'>
        <Header user={user} />
        {user ? (
          <CoinList user={user} />
        ) : (
          <form
            style={{
              gridArea: 'content',
              width: '400px',
              justifySelf: 'center',
            }}
            onSubmit={(e) => {
              setUser(e.target.user.value);
            }}
          >
            {' '}
            <div className='input-group'>
              <label htmlFor='user'>Username:</label>
              <input type='text' name='user' />
            </div>
            <div>
              <input type='submit' value='Send This' />
            </div>
          </form>
        )}

        {/* <Switch>
          <Route path='/people/:personID'></Route>
          <Route exact path='/'>

          </Route>
        </Switch> */}
        <footer className='footer'></footer>
      </div>
    </Router>
  );
}

export default App;

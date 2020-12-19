import React, { useEffect } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import socketIOClient from 'socket.io-client';

import Header from './components/Header/Header';
import CoinList from './components/CoinList/CoinList';
import { getCoins } from './actions/coin';
import { getNotifications } from './actions/notification';
import './App.css';

function App() {
  const [cookies, setCookie] = useCookies(['user']);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.user) {
      const socket = socketIOClient(
        'https://crypto-tracker-cmc.herokuapp.com/'
      );
    dispatch(getCoins(socket));
    dispatch(getNotifications(cookies.user));
    }
  }, [dispatch, cookies.user]);

  return (
    <Router>
      <div className='app'>
        <Header />
        {cookies.user ? (
          <CoinList />
        ) : (
          <form
            style={{
              gridArea: 'content',
              width: '400px',
              justifySelf: 'center',
            }}
            onSubmit={(e) => {
              setCookie('user', e.target.user.value, {
                maxAge: 3600,
              });
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

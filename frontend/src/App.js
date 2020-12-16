import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import CoinList from './components/CoinList/CoinList';

function App() {
  return (
    <Router>
      <div className={`app`}>
        <Header />
        <CoinList />
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

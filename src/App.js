import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import ShopPage from './components/shopPage/shopPage';
import Header from './components/header/header';

import './App.css';





function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

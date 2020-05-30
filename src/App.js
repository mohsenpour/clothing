import React from 'react';
import HomePage from './components/homePage/homePage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './components/shopPage/shopPage';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

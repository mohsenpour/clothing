import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import ShopPage from './components/shopPage/shopPage';
import Header from './components/header/header';
import SignInPage from './components/signInPage/signInPage';
import { auth } from './firebase/firebase';

import './App.css';





class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

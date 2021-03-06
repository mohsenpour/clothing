import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import ShopPage from './components/shopPage/shopPage';
import Header from './components/header/header';
import SignInPage from './components/signInPage/signInPage';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './components/checkoutPage/checkoutPage';
import './App.css';





class App extends Component {


  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInPage />} />

        </Switch>
      </div >
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

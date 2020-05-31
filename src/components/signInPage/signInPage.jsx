import React from 'react';
import SignIn from './../signIn/signIn'
import SignUp from '../signUp/signUp';
import './signInPage.scss';

const SignInPage = () => {
  return (
    <div className='signInPage'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInPage;

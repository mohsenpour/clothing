import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from '../cart/cart';
import CartDropDown from '../cartDropDown/cartDropDown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { signOutStart } from '../../redux/user/userActions';
import './header.scss'



const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <div className='header'>
      <Link className='logoContainer' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {
          currentUser ?
            <div className='option' onClick={signOutStart}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <Cart />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);

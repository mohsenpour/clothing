import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import './cart.scss';

const Cart = ({ toggleCartHidden }) => {
  return (
    <div className='cart' onClick={toggleCartHidden}>
      <CartIcon className='cartIcon' />
      <span className='itemCount'>0</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(Cart);

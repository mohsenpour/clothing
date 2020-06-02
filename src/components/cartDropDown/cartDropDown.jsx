import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';
import { selectCartItems } from '../../redux/cart/cardSelectors';
import './cartDropDown.scss';

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cartDropDown'>
      <div className="cartItems">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    cartItems: selectCartItems(state)
  }
)

export default connect(mapStateToProps, null)(CartDropDown);

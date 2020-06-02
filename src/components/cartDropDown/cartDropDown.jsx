import React from 'react';
import CustomButton from '../customButton/customButton';
import './cartDropDown.scss';

const CartDropDown = () => {
  return (
    <div className='cartDropDown'>
      <div className="cartItems">
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropDown;

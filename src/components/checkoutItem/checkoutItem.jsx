import React from 'react';
import './checkoutItem.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='checkoutItem'>
      <div className='imageContainer'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='removeButton'>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;

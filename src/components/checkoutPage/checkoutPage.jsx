import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem from '../checkoutItem/checkoutItem';
import StripeButton from '../stripeButton/stripeButton';
import './checkoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkoutPage">
      <div className="checkoutHeader">
        <div className="headerBlock"><span>Product</span></div>
        <div className="headerBlock"><span>Description</span></div>
        <div className="headerBlock"><span>Quantity</span></div>
        <div className="headerBlock"><span>Price</span></div>
        <div className="headerBlock"><span>Remove</span></div>
      </div>
      {
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <div className="testWarning">
        *Please use the following test credit cart for payment*
         <br />
         4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector(
  {
    cartItems: selectCartItems,
    total: selectCartTotal
  }
)

export default connect(mapStateToProps, null)(CheckoutPage); 

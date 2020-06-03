import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cartActions';
import './cartDropDown.scss';

const CartDropDown = ({ cartItems, toggleCartHidden, history }) => {
  return (
    <div className='cartDropDown'>
      <div className="cartItems">
        {
          cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
            :
            <span className='emptyMessage'>Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        toggleCartHidden();
      }
      }>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector(
  {
    cartItems: selectCartItems
  }
)

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));

import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cardSelectors';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import './cart.scss';

const Cart = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart' onClick={toggleCartHidden}>
      <CartIcon className='cartIcon' />
      <span className='itemCount'>{itemCount}</span>
    </div>
  )
}

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

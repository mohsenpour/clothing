import React from 'react';
import CustomButton from '../customButton/customButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

import './collectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collectionItem'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collectionFooter'>
        <span className='name' >{name}</span>
        <span className='price' >{`$${price}`}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>ADD to cart</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);

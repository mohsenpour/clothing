import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../collectionPreview/collectionPreview'
import './collectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collectionsOverview'>
      {
        collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);

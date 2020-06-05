import React, { Component } from 'react';
import CollectionsOverview from '../collectionsOverview/collectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collectionPage/collectionPage';
import { firestore, convertCollectionsSnapshotsToObject } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;


  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionsSnapshotsToObject(snapshot);
      updateCollections(collections);
    })
  }

  componentWillUnmount() {
    //this.unsubscribeFromSnapshot();
  }


  render() {
    const { match } = this.props;
    return (
      <div className='shopPage'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: (collections) => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);

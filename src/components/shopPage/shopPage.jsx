import React, { Component } from 'react';
import CollectionsOverview from '../collectionsOverview/collectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collectionPage/collectionPage';
import { firestore, convertCollectionsSnapshotsToObject } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import WithSpinner from '../withSpinner/withSpinner';


const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = { loading: true }

  unsubscribeFromSnapshot = null;


  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionsSnapshotsToObject(snapshot);
      updateCollections(collections);
      this.setState({ loading: false })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }


  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shopPage'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: (collections) => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);

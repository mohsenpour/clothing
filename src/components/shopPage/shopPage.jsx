import React, { Component } from 'react';
import CollectionsOverview from '../collectionsOverview/collectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collectionPage/collectionPage';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import { selectShopisFetching, selectShopIsCollectionsLoaded } from '../../redux/shop/shopSelectors';
import WithSpinner from '../withSpinner/withSpinner';


const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching, isCollectionsLoaded } = this.props;

    return (
      <div className='shopPage'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectShopisFetching,
  isCollectionsLoaded: selectShopIsCollectionsLoaded

})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

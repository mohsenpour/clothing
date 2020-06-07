import { createSelector } from 'reselect';


const selectShop = (state) => state.shop;

export const selectShopisFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching)




// Selector to retrive the top level collections for our shop page
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections)

export const selectShopIsCollectionsLoaded = createSelector(
  [selectShopCollections],
  (collections) => !!collections)

// Selector to convert collections object into an array for use in CollectionOverview
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => collections ? Object.values(collections) : [])


// Selector to retrive the items inside the collection to show on shop/{collection} page
export const selectCollection = collectionUrlParam =>
  createSelector([selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null)

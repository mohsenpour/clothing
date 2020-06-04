import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,

}

const selectShop = (state) => state.shop;

// Selector to retrive the top level collections for our shop page
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections)

// Selector to retrive the items inside the collection to show on shop/{collection} page
export const selectCollection = collectionUrlParam =>
  createSelector([selectShopCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]))

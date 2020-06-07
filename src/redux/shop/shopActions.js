import { ShopActionTypes } from "./shopActionTypes";
import { firestore, convertCollectionsSnapshotsToObject } from "../../firebase/firebase";


export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    try {
      const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());
      const snapShot = await collectionRef.get();
      const collections = convertCollectionsSnapshotsToObject(snapShot);
      dispatch(fetchCollectionsSuccess(collections))
    } catch (error) {
      dispatch(fetchCollectionsFailure(error.message))
    }
  }
}


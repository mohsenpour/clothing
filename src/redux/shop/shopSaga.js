import { takeEvery, call, put } from 'redux-saga/effects';
import { ShopActionTypes } from './shopActionTypes';
import { firestore, convertCollectionsSnapshotsToObject } from '../../firebase/firebase';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions';

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collections = yield call(convertCollectionsSnapshotsToObject, snapShot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync);
}






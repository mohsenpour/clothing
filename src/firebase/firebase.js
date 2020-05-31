import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBMNQSHkAq-Mt2XUIc3VXFQ_MR0ITPmBx8",
  authDomain: "clothing-c8a94.firebaseapp.com",
  databaseURL: "https://clothing-c8a94.firebaseio.com",
  projectId: "clothing-c8a94",
  storageBucket: "clothing-c8a94.appspot.com",
  messagingSenderId: "199545918162",
  appId: "1:199545918162:web:48993dda9164980633530b"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



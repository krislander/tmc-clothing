import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA5s6S-035hPkHBppoGhRxyAYqRMCHTFmw",
  authDomain: "tmc-clothing.firebaseapp.com",
  databaseURL: "https://tmc-clothing.firebaseio.com",
  projectId: "tmc-clothing",
  storageBucket: "tmc-clothing.appspot.com",
  messagingSenderId: "820468867482",
  appId: "1:820468867482:web:f5ecd400bbb2b4ec8c1a23",
  measurementId: "G-RZNR23TQ4N"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log("error creating user!", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

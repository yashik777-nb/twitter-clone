// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABW6cjTW3-FGS1cfXyUMhEYxxF0Kf_5Zw",
  authDomain: "twitter-clone-yash.firebaseapp.com",
  databaseURL:
    "https://twitter-clone-yash-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "twitter-clone-yash",
  storageBucket: "twitter-clone-yash.appspot.com",
  messagingSenderId: "702346797503",
  appId: "1:702346797503:web:7cc140195572bd7257010a",
  measurementId: "G-BQ3YLEP4DZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

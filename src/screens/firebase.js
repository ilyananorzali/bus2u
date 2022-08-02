import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyDvQYNf8lMETY_aDDhfj3qCEqezEvHFxIY",
  authDomain: "bus2u-316415.firebaseapp.com",
  databaseURL: "https://bus2u-316415-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "bus2u-316415",
  storageBucket: "bus2u-316415.appspot.com",
  messagingSenderId: "1079911599794",
  appId: "1:1079911599794:web:30bae57e69d86d569ec3ab",
  measurementId: "G-NWZZDHBD3H"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const db2 = firebase.database();

export { auth, db, db2 };




import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAe4eA_d7VMVZdlXZ2W7NoKLaWrxzWCIfE",
    authDomain: "taskfood-f4b98.firebaseapp.com",
    databaseURL: "https://taskfood-f4b98-default-rtdb.firebaseio.com",
    projectId: "taskfood-f4b98",
    storageBucket: "taskfood-f4b98.appspot.com",
    messagingSenderId: "253740567313",
    appId: "1:253740567313:web:2dd9cf55e556b1045bdab0",
    measurementId: "G-4MGDM3NEPP"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
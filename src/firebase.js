

import firebase from "firebase";
// require('dotenv').config()

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:"",
    authDomain: "bkofashion-v1.firebaseapp.com",
    projectId: "bkofashion-v1",
    storageBucket: "bkofashion-v1.appspot.com",
    messagingSenderId: "156500023147",
    appId: "1:156500023147:web:39150a89db49577214de2e",
    measurementId: "G-EPD7LS0GQG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBfTmPj4c9nxd4Y835GJ87hIJhAGnDzpw",
  authDomain: "signal-clone-app-23d41.firebaseapp.com",
  projectId: "signal-clone-app-23d41",
  storageBucket: "signal-clone-app-23d41.appspot.com",
  messagingSenderId: "30845284945",
  appId: "1:30845284945:web:b8e4b0c5f87e9c5dabfe70",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMfZly08NXn3XWui3T2Wha90THr6Kajz4",
  authDomain: "meeender633.firebaseapp.com",
  databaseURL: "https://meeender633.firebaseio.com",
  projectId: "meeender633",
  storageBucket: "meeender633.appspot.com",
  messagingSenderId: "46883806463",
  appId: "1:46883806463:web:98e1dcf7f3fde8d67ec0ca",
  measurementId: "G-VJC7N2ZL1C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;

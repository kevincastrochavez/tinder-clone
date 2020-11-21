import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4LBfbdCOSZxXkDfVmorcEvqMFFofPblo",
  authDomain: "tinder-fake-e3799.firebaseapp.com",
  databaseURL: "https://tinder-fake-e3799.firebaseio.com",
  projectId: "tinder-fake-e3799",
  storageBucket: "tinder-fake-e3799.appspot.com",
  messagingSenderId: "409989430209",
  appId: "1:409989430209:web:bee262c900c5bac0628d40",
  measurementId: "G-NG9PCXN6FF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

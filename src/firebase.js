// import firebase from "firebase/app";
// import "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkDAficYXJbTiloqNwREYUMhCXk1GFZG4",
  authDomain: "react-hooks-blog-78817.firebaseapp.com",
  projectId: "react-hooks-blog-78817",
  storageBucket: "react-hooks-blog-78817.appspot.com",
  messagingSenderId: "1034856828175",
  appId: "1:103486828175:web:430d21f28e558290ef827a",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

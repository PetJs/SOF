// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9nrSxkElVcPErp8JmMizbxR9IqRskyL0",
  authDomain: "sofn-9bfa8.firebaseapp.com",
  projectId: "sofn-9bfa8",
  storageBucket: "sofn-9bfa8.appspot.com",
  messagingSenderId: "821030382572",
  appId: "1:821030382572:web:06987188431eb44ce8aec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


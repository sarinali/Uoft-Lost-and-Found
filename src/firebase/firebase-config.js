// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore"
// import firebase from "firebase";
// import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDigaGqnOmJ2MR76KN8zkqvcuOKD3LFer4",
  authDomain: "uoft-lost-and-found.firebaseapp.com",
  projectId: "uoft-lost-and-found",
  storageBucket: "uoft-lost-and-found.appspot.com",
  messagingSenderId: "521493984351",
  appId: "1:521493984351:web:d4471bcf7412c578f657ea",
  measurementId: "G-EVDMYFVVNS"
}

// const firebaseApp=firebase.initializeApp(firebaseConfig);
// const db=firebase.firestore();



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app)
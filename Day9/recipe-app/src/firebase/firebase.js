// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzmDJ-ptTTX4AZUAZpha8SgL1QuWtAaSQ",
  authDomain: "recipe-project-fe831.firebaseapp.com",
  projectId: "recipe-project-fe831",
  storageBucket: "recipe-project-fe831.appspot.com",
  messagingSenderId: "747190754818",
  appId: "1:747190754818:web:4fe59374b4fe956fffd11b",
  measurementId: "G-D52S3HXRZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth=getAuth(app)

export { firestore, auth};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-zsgJOIf1buuxj_sV60IIk-Uk_ehjYb4",
  authDomain: "task-list-project-97876.firebaseapp.com",
  projectId: "task-list-project-97876",
  storageBucket: "task-list-project-97876.appspot.com",
  messagingSenderId: "1096714441190",
  appId: "1:1096714441190:web:85bb11672faec4c5230627",
  measurementId: "G-ZTB4YE1Q5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore= getFirestore(app);

export{
    firestore
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8enwUD2IgAxXQxYk1YcrnQNexUUlszSg",
  authDomain: "realtor-clone-app-745a4.firebaseapp.com",
  projectId: "realtor-clone-app-745a4",
  storageBucket: "realtor-clone-app-745a4.appspot.com",
  messagingSenderId: "1006270151703",
  appId: "1:1006270151703:web:e255e335d73fe87179f052"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
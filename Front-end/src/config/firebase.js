// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhFrF-yujZ50cML719LEGcx0bJkH1oCYU",
  authDomain: "music-app-17d14.firebaseapp.com",
  projectId: "music-app-17d14",
  storageBucket: "music-app-17d14.appspot.com",
  messagingSenderId: "1087802199644",
  appId: "1:1087802199644:web:5220a09fffdf059789a099",
  measurementId: "G-06EVGPQV49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
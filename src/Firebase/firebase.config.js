import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAD4P2L9Pm0q5uo-mTRClYdnBTObae92s",
  authDomain: "dragon-news-auth-c5fee.firebaseapp.com",
  projectId: "dragon-news-auth-c5fee",
  storageBucket: "dragon-news-auth-c5fee.firebasestorage.app",
  messagingSenderId: "96646419259",
  appId: "1:96646419259:web:bd6c5c8baea1e1d82c9d1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
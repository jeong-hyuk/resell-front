// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf9f5QuXy2pP_iwV8oUTYzPIWVPzlpvHc",
  authDomain: "resell-d3896.firebaseapp.com",
  projectId: "resell-d3896",
  storageBucket: "resell-d3896.appspot.com",
  messagingSenderId: "139124329705",
  appId: "1:139124329705:web:6c5c39f2d49747d45cf478",
  measurementId: "G-WPMXHG4E8K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

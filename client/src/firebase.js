// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-f4859.firebaseapp.com",
  projectId: "realestate-f4859",
  storageBucket: "realestate-f4859.appspot.com",
  messagingSenderId: "1022116382230",
  appId: "1:1022116382230:web:47e5ede4e39c5cb3a11737"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
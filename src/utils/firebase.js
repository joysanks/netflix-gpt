// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE8NG8WRUinQpE6IrMhWAq3HUYdURgtXM",
  authDomain: "netflixgpt-53269.firebaseapp.com",
  projectId: "netflixgpt-53269",
  storageBucket: "netflixgpt-53269.firebasestorage.app",
  messagingSenderId: "799509764631",
  appId: "1:799509764631:web:0f5cc2af45d6b29a8d5a52",
  measurementId: "G-HWBJN1H9XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH30emgfY4cfG8CZlw9nFXoe1qh55yxK4",
  authDomain: "food-delivery-website-3c5cf.firebaseapp.com",
  projectId: "food-delivery-website-3c5cf",
  storageBucket: "food-delivery-website-3c5cf.firebasestorage.app",
  messagingSenderId: "225130331678",
  appId: "1:225130331678:web:92fe1bc79b4ebef867780f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth}
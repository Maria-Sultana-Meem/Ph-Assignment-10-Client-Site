// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl0wk-VmpasKR_kJ1vGy211-SIJJLxaEE",
  authDomain: "assignment-purpose.firebaseapp.com",
  projectId: "assignment-purpose",
  storageBucket: "assignment-purpose.firebasestorage.app",
  messagingSenderId: "251708728649",
  appId: "1:251708728649:web:a16088f1504b9d6b32a698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
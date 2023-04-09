// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhQQclDEw-7OBobORRIukpvPA20GkSk7s",
  authDomain: "vmed-4d0aa.firebaseapp.com",
  projectId: "vmed-4d0aa",
  storageBucket: "vmed-4d0aa.appspot.com",
  messagingSenderId: "773165706304",
  appId: "1:773165706304:web:d5d9f645d5027afc7883a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export default app;
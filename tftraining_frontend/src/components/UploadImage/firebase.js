// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYZPTyQfre4uwPdT3xCb4K0lmmxwyHsHY",
  authDomain: "tftspam-75b96.firebaseapp.com",
  projectId: "tftspam-75b96",
  storageBucket: "tftspam-75b96.appspot.com",
  messagingSenderId: "944279176037",
  appId: "1:944279176037:web:e655d0b077daaa93ded78c",
  measurementId: "G-FR3WN7JJZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
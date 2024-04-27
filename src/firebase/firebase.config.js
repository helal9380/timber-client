// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhPJyxGhCvgf7-vGr1svliE9jzUdjqRSE",
  authDomain: "tembergem.firebaseapp.com",
  projectId: "tembergem",
  storageBucket: "tembergem.appspot.com",
  messagingSenderId: "1024013617745",
  appId: "1:1024013617745:web:fd26ee6c44802f975c8670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
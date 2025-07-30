// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnJJ7RPgalTAt92knEkWG0cI-i0xZVcD4",
  authDomain: "cinesage-749aa.firebaseapp.com",
  projectId: "cinesage-749aa",
  storageBucket: "cinesage-749aa.firebasestorage.app",
  messagingSenderId: "956607504580",
  appId: "1:956607504580:web:2893f0486b41a4b436a991",
  measurementId: "G-88XWX7LQJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


console.log(app)

export const auth = getAuth();

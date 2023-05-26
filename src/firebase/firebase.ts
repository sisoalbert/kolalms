// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.Firebase_apikey,
  authDomain: "kolalms.firebaseapp.com",
  projectId: "kolalms",
  storageBucket: "kolalms.appspot.com",
  messagingSenderId: "393152760270",
  appId: "1:393152760270:web:ecb9fef6c1ec706b4ac39f",
  measurementId: "G-9KM4GHDGBG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt02zvcBTuUzWzA9vMw-t2H0jcs8CrEYI",
  authDomain: "fir-crud-8b751.firebaseapp.com",
  projectId: "fir-crud-8b751",
  storageBucket: "fir-crud-8b751.appspot.com",
  messagingSenderId: "1078135577508",
  appId: "1:1078135577508:web:1a3c18bf81dfaad3d5ff31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8_Xn6DmtXpQOhKCizom36YQCWsUw0wUk",
  authDomain: "yoftahe-merkebu.firebaseapp.com",
  projectId: "yoftahe-merkebu",
  storageBucket: "yoftahe-merkebu.appspot.com",
  messagingSenderId: "353258077133",
  appId: "1:353258077133:web:db2fa4212038c5abc52284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



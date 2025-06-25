// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwzfAR1pEVoaFOIFahYGPFbFYjzqaFKfA",
  authDomain: "my-project-f4383.firebaseapp.com",
  projectId: "my-project-f4383",
  storageBucket: "my-project-f4383.firebasestorage.app",
  messagingSenderId: "747646156373",
  appId: "1:747646156373:web:b6348c6c05b5dccd0d9edc",
  measurementId: "G-9ZB3GQQH9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // eslint-disable-line no-unused-vars
const db = getFirestore(app);
export { db };
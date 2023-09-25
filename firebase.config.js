import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT2Gq7oqxEa1UOvjPh8_bGooIl-I65NDE",
  authDomain: "stuck-in-life.firebaseapp.com",
  projectId: "stuck-in-life",
  storageBucket: "stuck-in-life.appspot.com",
  messagingSenderId: "588074625277",
  appId: "1:588074625277:web:a768f02f275c7f29bc3694",
  measurementId: "G-GLWGMD11W7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optionally export services for direct usage
export const auth = getAuth(app);
export const db = getFirestore(app);

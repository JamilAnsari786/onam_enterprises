// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr8wcc7I_f6Dlv5bLiy15hCC4E60DHkpQ",
  authDomain: "onamenterprises-960c9.firebaseapp.com",
  projectId: "onamenterprises-960c9",
  storageBucket: "onamenterprises-960c9.firebasestorage.app",
  messagingSenderId: "209308515213",
  appId: "1:209308515213:web:a61085c8dd813190eb5bc4",
  measurementId: "G-YTSEFQ9G7P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

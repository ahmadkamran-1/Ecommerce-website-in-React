// src/services/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEJTbwXI_zfzilNUSa_fYPlARsUaBEAjY",
  authDomain: "ecommerce-react-34c48.firebaseapp.com",
  projectId: "ecommerce-react-34c48",
  storageBucket: "ecommerce-react-34c48.firebasestorage.app",
  messagingSenderId: "159322455947",
  appId: "1:159322455947:web:58f9f3888500b4f838398e",
};

const app = initializeApp(firebaseConfig);

// ✅ export ONCE
export const auth = getAuth(app);
export const db = getFirestore(app);

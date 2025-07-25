import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBqlu4bYDmMa1uLMI-pPCvWmzAVUcSo4A",
  authDomain: "prepwise-19d71.firebaseapp.com",
  projectId: "prepwise-19d71",
  storageBucket: "prepwise-19d71.firebasestorage.app",
  messagingSenderId: "1091587621325",
  appId: "1:1091587621325:web:4a76b6c488ae2e7c6e0484",
  measurementId: "G-BB61P5N2C4",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

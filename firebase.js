import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCAi0uJeOCv9TDz2vEaX4GM07aeXiq41o",
  authDomain: "liga-polskich-klubow.firebaseapp.com",
  projectId: "liga-polskich-klubow",
  storageBucket: "liga-polskich-klubow.firebasestorage.app",
  messagingSenderId: "144909575974",
  appId: "1:144909575974:web:1d4d79b565ba9f3ffec3e7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// kolekcje
export const teamsRef = collection(db, "teams");
export const matchesRef = collection(db, "matches");

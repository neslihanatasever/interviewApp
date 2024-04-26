import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.INTERVIJA_FIREBASE_KEY,
  authDomain: "interviewapp-3f8d9.firebaseapp.com",
  databaseURL: "https://interviewapp-3f8d9-default-rtdb.firebaseio.com",
  projectId: "interviewapp-3f8d9",
  storageBucket: "interviewapp-3f8d9.appspot.com",
  messagingSenderId: "809424307236",
  appId: "1:809424307236:web:7090ebb58536ab0aa184b1",
  measurementId: "G-C0M9G87L2L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
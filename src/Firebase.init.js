
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCgibsYxPk-IL38O5XkWRxm4vO1mE5sBus",
  authDomain: "personal-gym-trainer-c42fc.firebaseapp.com",
  projectId: "personal-gym-trainer-c42fc",
  storageBucket: "personal-gym-trainer-c42fc.appspot.com",
  messagingSenderId: "728993080339",
  appId: "1:728993080339:web:9ea368aa0774710c960be6",
  measurementId: "G-P8RTBYREG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)

export {auth, analytics};
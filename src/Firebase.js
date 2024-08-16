import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD6E-PwwImU9xME1vVvEdJPRbLytjMpZYM",
  authDomain: "portfolio-krishnaa.firebaseapp.com",
  projectId: "portfolio-krishnaa",
  storageBucket: "portfolio-krishnaa.appspot.com",
  messagingSenderId: "756841630638",
  appId: "1:756841630638:web:0e28db7f32e2924d81563f",
  measurementId: "G-9YMW7KSVFR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);



import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-21af6.firebaseapp.com",
  projectId: "interviewiq-21af6",
  storageBucket: "interviewiq-21af6.firebasestorage.app",
  messagingSenderId: "787600307271",
  appId: "1:787600307271:web:d844c3347526d3a3316d62"
};


const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

const provider = new GoogleAuthProvider()

export {auth,provider}

 
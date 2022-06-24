 
import { initializeApp  } from "firebase/app";
import {getAuth} from 'firebase/auth';

 
const firebaseConfig = {
  apiKey: "AIzaSyCANWUQYBs8E1Am559kMyf2J1dSJFRLLs0",
  authDomain: "fruits-house-1bfe4.firebaseapp.com",
  projectId: "fruits-house-1bfe4",
  storageBucket: "fruits-house-1bfe4.appspot.com",
  messagingSenderId: "822165468123",
  appId: "1:822165468123:web:7121cd2e93b3b06c326dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
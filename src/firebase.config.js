// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDopaFt9UcFCbMzzZEA55jJr7sTkAKMdn0",
  authDomain: "house-marketplace-app-a74e1.firebaseapp.com",
  projectId: "house-marketplace-app-a74e1",
  storageBucket: "house-marketplace-app-a74e1.appspot.com",
  messagingSenderId: "1027543358335",
  appId: "1:1027543358335:web:bd41b59d1f25a17099d84a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

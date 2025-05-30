// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzrMJS7gj3VtUwFsDdd0BJPcY0V1V6s_M",
  authDomain: "netflixgpt-9043c.firebaseapp.com",
  projectId: "netflixgpt-9043c",
  storageBucket: "netflixgpt-9043c.firebasestorage.app",
  messagingSenderId: "158616220489",
  appId: "1:158616220489:web:9a58acda50587c39312098",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

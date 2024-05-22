// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYYjnBGj5TPKzPnypDMsvCjlxjVvaYx1A",
  authDomain: "netflixgpt-d0739.firebaseapp.com",
  projectId: "netflixgpt-d0739",
  storageBucket: "netflixgpt-d0739.appspot.com",
  messagingSenderId: "484037281719",
  appId: "1:484037281719:web:cd89ca528a8c69ddaeca32",
  measurementId: "G-TBMCGHJ708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth(); 
// Import the functions you need from the SDKs you need
import { initializeApp, getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiLtOU4GDDW1-nlonKMVEbsWR63LzWwQk",
  authDomain: "achefacil-17d17.firebaseapp.com",
  projectId: "achefacil-17d17",
  storageBucket: "achefacil-17d17.appspot.com",
  messagingSenderId: "852091171667",
  appId: "1:852091171667:web:bc1911c01d4c1f042ba7a6"
};

// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();
export {app,db,storage}
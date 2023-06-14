// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-i357S3sA_yztHv-8t-sPXtx-mprL3_4",
  authDomain: "easyai-clone.firebaseapp.com",
  projectId: "easyai-clone",
  storageBucket: "easyai-clone.appspot.com",
  messagingSenderId: "746681263290",
  appId: "1:746681263290:web:5a48302fcb33f37f51ce83",
  measurementId: "G-5777T8B81C"
};

// Initialize Firebase
const app = getApps().length ? getApp():initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};

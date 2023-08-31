import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBx50ERJr-m5sxr2J3IFn_aaB523mEbM-0",
  authDomain: "nextauth-397611.firebaseapp.com",
  projectId: "nextauth-397611",
  storageBucket: "nextauth-397611.appspot.com",
  messagingSenderId: "775210567987",
  appId: "1:775210567987:web:9753bf5319e3e1fd881646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
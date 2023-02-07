import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBIXZLURiSBsisPeOicNXrPTEaUt3l8NLQ",
    authDomain: "restaurant-app-41d55.firebaseapp.com",
    databaseURL: "https://restaurant-app-41d55-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-41d55",
    storageBucket: "restaurant-app-41d55.appspot.com",
    messagingSenderId: "188712229845",
    appId: "1:188712229845:web:1cb78bf596d204ccba3b5c",
    measurementId: "G-BZQPY9XSR8"
  };

  const app =getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore =getFirestore(app)
  const storage = getStorage(app)

export {app, firestore, storage };


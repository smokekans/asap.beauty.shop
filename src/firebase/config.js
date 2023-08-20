import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLj3BKYuBcSnRaTp89Lv4EdTEIGwMXoNI",
  authDomain: "asap-beauty-shop.firebaseapp.com",
  databaseURL:
    "https://asap-beauty-shop-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "asap-beauty-shop",
  storageBucket: "asap-beauty-shop.appspot.com",
  messagingSenderId: "828266129560",
  appId: "1:828266129560:web:f928ccefec7612aef8c8ed",
  measurementId: "G-MPBDZP3Z35",
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

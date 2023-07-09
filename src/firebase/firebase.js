import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "agricultural-supply-chain.firebaseapp.com",
  projectId: "agricultural-supply-chain",
  storageBucket: "agricultural-supply-chain.appspot.com",
  messagingSenderId: "155511323115",
  appId: "1:155511323115:web:05249f25a2b939c2f281ae",
  measurementId: "G-CZJ5MWFDZJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



export const usersRef = collection(db, "users");

export const contactsRef = collection(db, "contacts");

export const manufacturerRef = collection(db, "manufacturer");

export const farmerRef = collection(db, "farmer");

export const reviewsRef = collection(db, "reviews");

export const productsRef = collection(db, "products");

export default app;

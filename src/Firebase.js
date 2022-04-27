
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBL1zpR7y3Bc_DRcMxyVjHJmEpA-ogliAU",
    authDomain: "e-lms-99da4.firebaseapp.com",
    databaseURL: "https://e-lms-99da4-default-rtdb.firebaseio.com",
    projectId: "e-lms-99da4",
    storageBucket: "e-lms-99da4.appspot.com",
    messagingSenderId: "10856688122",
    appId: "1:10856688122:web:32514844698126e80f1c43",
    measurementId: "G-RV1LPXKV32"
};

// Initialize Firebase
const db = getDatabase(initializeApp(firebaseConfig));
export default db;

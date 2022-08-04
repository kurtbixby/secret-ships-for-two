import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { getTokenForUser } from './auth.js';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.FIREBASE_DB_URL
};
console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const userName = 'myUserName';
const token = await getTokenForUser(userName);
console.log('Token: ' + token);
const auth = getAuth();
signInWithCustomToken(auth, token)
    .then((userCredential) => {
        console.log('Got User Credential');
        console.log(userCredential);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        console.error(error);
    });
export { getTokenForUser };

import 'dotenv/config';
import { applicationDefault, initializeApp as initializeAppAdmin } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

initializeAppAdmin({
    credential: applicationDefault(),
    databaseURL: process.env.FIREBASE_DB_URL
});

async function getTokenForUser(uid) {
    try {
        const token = await getAuth().createCustomToken(uid);
        console.log('Created Token: ' + token);
        return token;
    } catch (error) {
        console.log('Error creating custom token: ', error);
    }
}

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from 'expo-constants';

const firebaseConfig = {
    apiKey: Constants.expoConfig.extra.apiKey, // o Constants.manifest.extra.apiKey
    authDomain: Constants.expoConfig.extra.authDomain,
    projectId: Constants.expoConfig.extra.projectId,
    storageBucket: Constants.expoConfig.extra.storageBucket,
    messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
    appId: Constants.expoConfig.extra.appId,
    // databaseURL: Constants.expoConfig.extra.databaseURL
};


let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

export const database = getFirestore(app);
// initializeApp(firebaseConfig);
// export const database = getFirestore();
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeh01X3Ghy6NBmp4V32mCyhVxxQivruLE",
  authDomain: "fashion-aggregator-34298.firebaseapp.com",
  projectId: "fashion-aggregator-34298",
  storageBucket: "fashion-aggregator-34298.appspot.com",
  messagingSenderId: "284876390486",
  appId: "1:284876390486:web:4775e7f68b32d60053bbf7",
  measurementId: "G-49YHSCRJ26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASpCOmcrrgS11FPcr-IRxvWRm7Uqg4Hyw",
  authDomain: "clone-a360c.firebaseapp.com",
  databaseURL: "https://clone-a360c.firebaseio.com",
  projectId: "clone-a360c",
  storageBucket: "clone-a360c.appspot.com",
  messagingSenderId: "569453149170",
  appId: "1:569453149170:web:3e56a57e2a0e6f6fe2496b",
  measurementId: "G-EVGD4M7WMP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

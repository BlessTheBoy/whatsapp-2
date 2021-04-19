import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_GCqqejoK-6DBjz76UeJ565lh1iO_Uq0",
  authDomain: "whatsapp-2-704d5.firebaseapp.com",
  projectId: "whatsapp-2-704d5",
  storageBucket: "whatsapp-2-704d5.appspot.com",
  messagingSenderId: "506817287324",
  appId: "1:506817287324:web:611a48b53494330a954959",
  measurementId: "G-92221R1DN7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

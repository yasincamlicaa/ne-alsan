import { initializeApp } from "firebase/app";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkRwlYGlFDYdyAR0L_tYAbiGfnwxM01WQ",
  authDomain: "ne-alsan-case.firebaseapp.com",
  projectId: "ne-alsan-case",
  storageBucket: "ne-alsan-case.appspot.com",
  messagingSenderId: "885146543707",
  appId: "1:885146543707:web:6154fbfae5771c346f817e",
  measurementId: "G-17Z3CGY250"
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export { auth, signInWithEmailAndPassword, app };
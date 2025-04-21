import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCVvwGqpoZObm469biO41vOD5UEFx8nGEE",
    authDomain: "vue3-432e1.firebaseapp.com",
    projectId: "vue3-432e1",
    storageBucket: "vue3-432e1.firebasestorage.app",
    messagingSenderId: "359915570443",
    appId: "1:359915570443:web:7f3be1ca9e1b8439e74e0e",
    measurementId: "G-Z83F88J2FS"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };

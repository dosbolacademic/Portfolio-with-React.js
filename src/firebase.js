import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyA9Fgzk6doi5Yz8IgsB5kFT4PrAjTywFho',
  authDomain: 'portfolio-with-react-js.firebaseapp.com',
  projectId: 'portfolio-with-react-js',
  storageBucket: 'portfolio-with-react-js.appspot.com',
  messagingSenderId: '225327558382',
  appId: '1:225327558382:web:089dba0faccf95b9260dff',
  measurementId: 'G-93MFSGL2NX',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);

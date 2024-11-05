import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBo-aQBlU44XhrmRtUjp_nKIBl7uE8u3Yg",
  authDomain: "aequacapital.firebaseapp.com",
  projectId: "aequacapital",
  storageBucket: "aequacapital.firebasestorage.app",
  messagingSenderId: "1056403497968",
  appId: "1:1056403497968:web:b57b2e79394a798bd2b335"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
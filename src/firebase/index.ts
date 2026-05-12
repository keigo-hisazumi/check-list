import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD-ZqqmjWn1LSxII6BeVqbbWoJITlSv7HQ',
  authDomain: 'check-list-f5aee.firebaseapp.com',
  projectId: 'check-list-f5aee',
  storageBucket: 'check-list-f5aee.firebasestorage.app',
  messagingSenderId: '766444919460',
  appId: '1:766444919460:web:a36a1765bddbfd107ce431'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

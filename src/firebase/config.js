import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyD9_FMRTQW-3-qahFqUGOdrjfRH2gmsLws',
  authDomain: 'bigbuy-3dee1.firebaseapp.com',
  projectId: 'bigbuy-3dee1',
  storageBucket: 'bigbuy-3dee1.appspot.com',
  messagingSenderId: '980116162233',
  appId: '1:980116162233:web:5cd56e4d69ce8f9999fd68',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../firebase/config'

export const handleCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const handleSignInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const handleSignOut = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const handleSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  console.log('Yo')
  try {
    const res = await signInWithPopup(auth, provider)
    return Promise.resolve(res)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

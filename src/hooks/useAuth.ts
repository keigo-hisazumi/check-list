import { useState, useEffect } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'
import { auth } from '../firebase/index'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setAuthLoading(false)
    })
    return unsubscribe
  }, [])

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

  const signUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

  const signOut = () => firebaseSignOut(auth)

  return { user, authLoading, signIn, signUp, signOut }
}

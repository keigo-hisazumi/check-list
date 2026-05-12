import { ref, onMounted, onUnmounted } from 'vue'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth'
import { auth } from '../firebase/index'

const user = ref<User | null>(null)
const authLoading = ref(true)

let unsubscribe: (() => void) | null = null
let listenerCount = 0

export function useAuth() {
  onMounted(() => {
    listenerCount++
    if (!unsubscribe) {
      unsubscribe = onAuthStateChanged(auth, (u) => {
        user.value = u
        authLoading.value = false
      })
    }
  })

  onUnmounted(() => {
    listenerCount--
    if (listenerCount === 0 && unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
  })

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

  const signUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

  const signOut = () => firebaseSignOut(auth)

  return { user, authLoading, signIn, signUp, signOut }
}

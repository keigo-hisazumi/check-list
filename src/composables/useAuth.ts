import { ref, onMounted, onUnmounted } from 'vue'
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  getRedirectResult,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth'
import { auth } from '../firebase/index'

const user = ref<User | null>(null)
const authLoading = ref(true)

// シングルトンとして認証状態を管理
let unsubscribe: (() => void) | null = null
let listenerCount = 0

export function useAuth() {
  onMounted(() => {
    listenerCount++
    if (!unsubscribe) {
      // リダイレクト後の認証結果を取得
      getRedirectResult(auth).catch(() => {
        // リダイレクトではない場合は無視
      })

      unsubscribe = onAuthStateChanged(auth, (u) => {
        user.value = u
        authLoading.value = false
      })
    } else {
      // すでにリスナーが設定済みの場合、ローディングを解除
      if (user.value !== undefined) {
        authLoading.value = false
      }
    }
  })

  onUnmounted(() => {
    listenerCount--
    if (listenerCount === 0 && unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
  })

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    // iOS PWA などポップアップが使えない環境ではリダイレクトにフォールバック
    try {
      await signInWithPopup(auth, provider)
    } catch (err: unknown) {
      const error = err as { code?: string }
      if (
        error.code === 'auth/popup-blocked' ||
        error.code === 'auth/popup-closed-by-user' ||
        error.code === 'auth/cancelled-popup-request'
      ) {
        await signInWithRedirect(auth, provider)
      } else {
        throw err
      }
    }
  }

  const signOut = () => firebaseSignOut(auth)

  return { user, authLoading, signInWithGoogle, signOut }
}

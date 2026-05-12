<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

const { signIn, signUp } = useAuth()

const mode = ref<'login' | 'signup'>('login')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const handleSubmit = async () => {
  errorMessage.value = ''
  if (!email.value || !password.value) {
    errorMessage.value = 'メールアドレスとパスワードを入力してください'
    return
  }

  isLoading.value = true
  try {
    if (mode.value === 'login') {
      await signIn(email.value, password.value)
    } else {
      await signUp(email.value, password.value)
    }
  } catch (err: unknown) {
    const error = err as { code?: string }
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage.value = 'メールアドレスの形式が正しくありません'
        break
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        errorMessage.value = 'メールアドレスまたはパスワードが正しくありません'
        break
      case 'auth/email-already-in-use':
        errorMessage.value = 'このメールアドレスはすでに登録されています'
        break
      case 'auth/weak-password':
        errorMessage.value = 'パスワードは6文字以上で入力してください'
        break
      case 'auth/too-many-requests':
        errorMessage.value = 'ログイン試行が多すぎます。しばらくしてから再試行してください'
        break
      default:
        errorMessage.value = 'エラーが発生しました。もう一度お試しください'
    }
  } finally {
    isLoading.value = false
  }
}

const toggleMode = () => {
  mode.value = mode.value === 'login' ? 'signup' : 'login'
  errorMessage.value = ''
}
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-icon">✅</div>
      <h1 class="login-title">チェックリスト</h1>
      <p class="login-subtitle">
        {{ mode === 'login' ? 'ログインしてデータを同期' : '新規アカウントを作成' }}
      </p>

      <form class="login-form" @submit.prevent="handleSubmit">
        <div class="field">
          <label class="field-label" for="email">メールアドレス</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="field-input"
            placeholder="example@example.com"
            autocomplete="email"
            :disabled="isLoading"
          />
        </div>

        <div class="field">
          <label class="field-label" for="password">パスワード</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="field-input"
            :placeholder="mode === 'signup' ? '6文字以上' : 'パスワード'"
            :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
            :disabled="isLoading"
          />
        </div>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <button type="submit" class="submit-button" :disabled="isLoading">
          <span v-if="isLoading" class="spinner"></span>
          <span v-else>{{ mode === 'login' ? 'ログイン' : 'アカウントを作成' }}</span>
        </button>
      </form>

      <button class="toggle-button" @click="toggleMode" :disabled="isLoading">
        {{
          mode === 'login'
            ? 'アカウントをお持ちでない方はこちら'
            : 'すでにアカウントをお持ちの方はこちら'
        }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 48px 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.login-icon {
  font-size: 3em;
  margin-bottom: 16px;
}

.login-title {
  font-size: 1.8em;
  color: #333;
  margin: 0 0 8px;
  font-weight: 700;
}

.login-subtitle {
  color: #888;
  font-size: 0.95em;
  margin: 0 0 28px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  font-size: 0.85em;
  font-weight: 600;
  color: #555;
}

.field-input {
  padding: 12px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1em;
  outline: none;
  transition: border-color 0.2s ease;
  background: white;
}

.field-input:focus {
  border-color: #667eea;
}

.field-input:disabled {
  background: #f5f5f5;
  color: #aaa;
}

.error-message {
  font-size: 0.88em;
  color: #dc3545;
  margin: 0;
  text-align: center;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.1s ease;
  -webkit-tap-highlight-color: transparent;
  margin-top: 4px;
}

.submit-button:hover:not(:disabled) {
  opacity: 0.9;
}

.submit-button:active:not(:disabled) {
  transform: scale(0.98);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.toggle-button {
  display: block;
  width: 100%;
  margin-top: 20px;
  background: none;
  border: none;
  color: #667eea;
  font-size: 0.88em;
  cursor: pointer;
  text-align: center;
  text-decoration: underline;
  padding: 4px;
  -webkit-tap-highlight-color: transparent;
}

.toggle-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .login-card {
    padding: 36px 24px;
  }
}
</style>

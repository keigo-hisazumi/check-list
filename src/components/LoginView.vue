<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="app-title">✅ チェックリスト</h1>
      <h2 class="form-title">{{ mode === 'login' ? 'ログイン' : '新規登録' }}</h2>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="example@email.com"
            required
            autocomplete="email"
            :disabled="isLoading"
          />
        </div>

        <div class="form-group">
          <label for="password">パスワード</label>
          <input
            id="password"
            v-model="password"
            type="password"
            :placeholder="mode === 'signup' ? '6文字以上' : 'パスワード'"
            required
            minlength="6"
            :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
            :disabled="isLoading"
          />
        </div>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <button type="submit" class="btn-submit" :disabled="isLoading">
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>{{ mode === 'login' ? 'ログイン' : '登録する' }}</span>
        </button>
      </form>

      <button @click="toggleMode" class="btn-toggle" :disabled="isLoading">
        {{
          mode === 'login'
            ? 'アカウントをお持ちでない方はこちら'
            : 'すでにアカウントをお持ちの方はこちら'
        }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

const { signIn, signUp } = useAuth()

const mode = ref<'login' | 'signup'>('login')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

async function handleSubmit() {
  errorMessage.value = ''
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

function toggleMode() {
  mode.value = mode.value === 'login' ? 'signup' : 'login'
  errorMessage.value = ''
}
</script>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.app-title {
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.25rem;
}

.form-title {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #444;
}

.form-group input {
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  background: white;
}

.form-group input:focus {
  border-color: #667eea;
}

.form-group input:disabled {
  background: #f5f5f5;
  color: #aaa;
}

.error-message {
  font-size: 0.875rem;
  color: #e53935;
  text-align: center;
  padding: 0.5rem;
  background: #ffebee;
  border-radius: 6px;
  margin: 0;
}

.btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  -webkit-tap-highlight-color: transparent;
  margin-top: 0.25rem;
}

.btn-submit:hover:not(:disabled) {
  opacity: 0.9;
}

.btn-submit:active:not(:disabled) {
  transform: scale(0.98);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.btn-toggle {
  display: block;
  width: 100%;
  margin-top: 1.25rem;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #667eea;
  font-size: 0.875rem;
  cursor: pointer;
  text-align: center;
  text-decoration: underline;
  -webkit-tap-highlight-color: transparent;
}

.btn-toggle:hover:not(:disabled) {
  color: #764ba2;
}

.btn-toggle:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .login-card {
    padding: 2rem 1.5rem;
  }
}
</style>

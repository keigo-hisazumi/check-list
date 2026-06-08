import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import { useAuth } from '../hooks/useAuth'

export function LoginScreen() {
  const { signIn, signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      setError('メールアドレスとパスワードを入力してください')
      return
    }
    setLoading(true)
    setError('')
    try {
      if (isSignUp) {
        await signUp(email.trim(), password)
      } else {
        await signIn(email.trim(), password)
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e)
      if (msg.includes('invalid-credential') || msg.includes('wrong-password')) {
        setError('メールアドレスまたはパスワードが正しくありません')
      } else if (msg.includes('email-already-in-use')) {
        setError('このメールアドレスはすでに登録済みです')
      } else if (msg.includes('weak-password')) {
        setError('パスワードは6文字以上で設定してください')
      } else {
        setError('エラーが発生しました。もう一度お試しください')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.card}>
          <Text style={styles.title}>チェックリスト</Text>
          <Text style={styles.subtitle}>{isSignUp ? '新規登録' : 'ログイン'}</Text>

          <TextInput
            style={styles.input}
            placeholder="メールアドレス"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
          <TextInput
            style={styles.input}
            placeholder="パスワード"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete={isSignUp ? 'new-password' : 'current-password'}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity
            style={[styles.submitBtn, loading && styles.submitBtnDisabled]}
            onPress={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.submitText}>{isSignUp ? '登録する' : 'ログイン'}</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setIsSignUp(!isSignUp); setError('') }}>
            <Text style={styles.switchText}>
              {isSignUp ? 'すでにアカウントをお持ちの方はこちら' : 'アカウントを作成する'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3ff',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    width: '100%',
    maxWidth: 480,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#667eea',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    backgroundColor: '#fafafa',
  },
  error: {
    color: '#dc3545',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  submitBtn: {
    backgroundColor: '#667eea',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  submitBtnDisabled: {
    opacity: 0.7,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  switchText: {
    color: '#667eea',
    fontSize: 14,
    textAlign: 'center',
  },
})

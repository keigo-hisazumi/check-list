import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { useAuth } from '../src/hooks/useAuth'
import { LoginScreen } from '../src/components/LoginScreen'
import { MainScreen } from '../src/components/MainScreen'

export default function Index() {
  const { user, authLoading, signOut } = useAuth()

  if (authLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#667eea" />
      </View>
    )
  }

  if (!user) {
    return <LoginScreen />
  }

  return <MainScreen user={user} onSignOut={signOut} />
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})

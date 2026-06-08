import React, { useState, useEffect, useRef } from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'

interface Props {
  visible: boolean
  title: string
  defaultValue?: string
  placeholder?: string
  onConfirm: (text: string) => void
  onCancel: () => void
}

export function PromptModal({ visible, title, defaultValue = '', placeholder, onConfirm, onCancel }: Props) {
  const [text, setText] = useState(defaultValue)
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    if (visible) {
      setText(defaultValue)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [visible, defaultValue])

  const handleConfirm = () => {
    const trimmed = text.trim()
    if (trimmed) onConfirm(trimmed)
  }

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.overlay}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.dialog}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
              ref={inputRef}
              style={styles.input}
              value={text}
              onChangeText={setText}
              placeholder={placeholder}
              onSubmitEditing={handleConfirm}
              returnKeyType="done"
            />
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
                <Text style={styles.cancelText}>キャンセル</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
                <Text style={styles.confirmText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  dialog: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: '#667eea',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cancelText: {
    fontSize: 16,
    color: '#666',
  },
  confirmBtn: {
    backgroundColor: '#667eea',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  confirmText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
})

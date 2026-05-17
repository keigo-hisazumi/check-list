import { ref, watch, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import type { User } from 'firebase/auth'
import type { Unsubscribe } from 'firebase/firestore'
import {
  subscribeChecklistsConfig,
  saveChecklistsConfig,
  type ChecklistConfig
} from '../firebase/firestore'

const defaultChecklists: ChecklistConfig[] = [
  {
    id: 'tutorial',
    label: 'チュートリアル',
    initialItems: [
      { id: 'tutorial-check', label: 'タスクをタップしてチェックを入れてみよう' },
      { id: 'tutorial-reset', label: '「すべてリセット」でチェックをまとめて外してみよう' },
      { id: 'tutorial-edit-mode', label: '「項目を編集」ボタンで編集モードに切り替えてみよう' },
      { id: 'tutorial-edit', label: '編集モードで鉛筆アイコンをタップしてタスク名を変えてみよう' },
      { id: 'tutorial-reorder', label: '編集モードでドラッグしてタスクを並び替えてみよう' },
      { id: 'tutorial-delete', label: '編集モードでゴミ箱アイコンをタップしてタスクを削除してみよう' },
      { id: 'tutorial-add', label: '編集モードで「新しい項目を追加」からタスクを追加してみよう' },
      { id: 'tutorial-new-list', label: 'ナビの「＋」ボタンで新しいチェックリストを作ってみよう' },
    ]
  }
]

export function useChecklistConfigSync(user: Ref<User | null>) {
  const checklists = ref<ChecklistConfig[]>([])
  const activeView = ref<string>('')

  let configUnsubscribe: Unsubscribe | null = null
  let isSavingToFirestore = false
  let lastFirestoreJson = ''

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('checklists-config')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        checklists.value = parsed
        if (checklists.value.length > 0) {
          activeView.value = checklists.value[0].id
        }
      } catch {
        checklists.value = [...defaultChecklists]
        activeView.value = checklists.value[0].id
      }
    } else {
      checklists.value = [...defaultChecklists]
      activeView.value = checklists.value[0].id
      localStorage.setItem('checklists-config', JSON.stringify(checklists.value))
    }
  }

  const saveToLocalStorage = () => {
    localStorage.setItem('checklists-config', JSON.stringify(checklists.value))
  }

  const saveToFirestore = async (uid: string) => {
    const json = JSON.stringify(checklists.value)
    if (json === lastFirestoreJson) return
    isSavingToFirestore = true
    try {
      await saveChecklistsConfig(uid, checklists.value)
      lastFirestoreJson = json
    } finally {
      isSavingToFirestore = false
    }
  }

  const stopFirestoreSync = () => {
    if (configUnsubscribe) {
      configUnsubscribe()
      configUnsubscribe = null
    }
  }

  const startFirestoreSync = (uid: string) => {
    stopFirestoreSync()
    configUnsubscribe = subscribeChecklistsConfig(uid, (remoteChecklists) => {
      if (isSavingToFirestore) return
      if (remoteChecklists) {
        const json = JSON.stringify(remoteChecklists)
        if (json === lastFirestoreJson) return
        lastFirestoreJson = json
        checklists.value = remoteChecklists
        if (!checklists.value.find(c => c.id === activeView.value) && checklists.value.length > 0) {
          activeView.value = checklists.value[0].id
        }
      } else {
        saveToFirestore(uid)
      }
    })
  }

  watch(user, (newUser, oldUser) => {
    if (newUser) {
      startFirestoreSync(newUser.uid)
    } else if (oldUser && !newUser) {
      stopFirestoreSync()
      lastFirestoreJson = ''
      loadFromLocalStorage()
    }
  })

  watch(checklists, () => {
    saveToLocalStorage()
    if (user.value && !isSavingToFirestore) {
      saveToFirestore(user.value.uid)
    }
  }, { deep: true })

  onMounted(() => {
    loadFromLocalStorage()
  })

  onUnmounted(() => {
    stopFirestoreSync()
  })

  return { checklists, activeView }
}

import { ref, watch, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import type { User } from 'firebase/auth'
import type { Unsubscribe } from 'firebase/firestore'
import {
  subscribeChecklistsConfig,
  subscribeChecklistIds,
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
  let checklistIdsUnsubscribe: Unsubscribe | null = null
  let isSavingToFirestore = false
  let hasSyncedFromFirestore = false
  let lastSavedIds = ''
  let labelDocsInfo: Array<{ id: string; label?: string }> = []

  const lsKey = () => `checklists-config-${user.value?.uid ?? 'guest'}`

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem(lsKey())
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
      localStorage.setItem(lsKey(), JSON.stringify(checklists.value))
    }
  }

  const saveToLocalStorage = () => {
    localStorage.setItem(lsKey(), JSON.stringify(checklists.value))
  }

  const saveToFirestore = async (uid: string) => {
    if (!hasSyncedFromFirestore) return

    const ids = checklists.value.map(c => c.id)
    const idsJson = JSON.stringify(ids)
    if (idsJson === lastSavedIds) return
    if (isSavingToFirestore) return

    isSavingToFirestore = true
    try {
      await saveChecklistsConfig(uid, ids)
      lastSavedIds = idsJson
    } finally {
      isSavingToFirestore = false
      // 保存中に変更があった場合は再保存
      const currentIds = JSON.stringify(checklists.value.map(c => c.id))
      if (currentIds !== lastSavedIds) {
        saveToFirestore(uid)
      }
    }
  }

  const stopFirestoreSync = () => {
    configUnsubscribe?.()
    configUnsubscribe = null
    checklistIdsUnsubscribe?.()
    checklistIdsUnsubscribe = null
    hasSyncedFromFirestore = false
  }

  const startFirestoreSync = (uid: string) => {
    stopFirestoreSync()
    hasSyncedFromFirestore = false
    labelDocsInfo = []

    // config が唯一の正。ここに含まれるIDだけを表示する
    configUnsubscribe = subscribeChecklistsConfig(uid, (ids) => {
      if (isSavingToFirestore) return
      hasSyncedFromFirestore = true

      if (ids !== null) {
        const idsJson = JSON.stringify(ids)
        if (idsJson === lastSavedIds) return
        lastSavedIds = idsJson

        const labelsMap = new Map(labelDocsInfo.map(d => [d.id, d.label]))
        const existingMap = new Map(checklists.value.map(c => [c.id, c]))

        checklists.value = ids.map(id => ({
          id,
          label: labelsMap.get(id) ?? existingMap.get(id)?.label ?? id,
          initialItems: existingMap.get(id)?.initialItems ?? []
        }))

        if (!checklists.value.find(c => c.id === activeView.value) && checklists.value.length > 0) {
          activeView.value = checklists.value[0].id
        }
      } else {
        // Firestore に config がなければ現在の状態を保存
        saveToFirestore(uid)
      }
    })

    // ラベル更新のみ担当
    checklistIdsUnsubscribe = subscribeChecklistIds(uid, (docs) => {
      labelDocsInfo = docs
      const labelsMap = new Map(docs.map(d => [d.id, d.label]))

      let changed = false
      const updated = checklists.value.map(c => {
        const remoteLabel = labelsMap.get(c.id)
        if (remoteLabel !== undefined && remoteLabel !== c.label) {
          changed = true
          return { ...c, label: remoteLabel }
        }
        return c
      })
      if (changed) {
        checklists.value = updated
      }
    })
  }

  watch(user, (newUser, oldUser) => {
    if (newUser) {
      lastSavedIds = ''
      loadFromLocalStorage()
      startFirestoreSync(newUser.uid)
    } else if (oldUser && !newUser) {
      stopFirestoreSync()
      lastSavedIds = ''
      loadFromLocalStorage()
    }
  })

  watch(checklists, () => {
    saveToLocalStorage()
    if (user.value) {
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

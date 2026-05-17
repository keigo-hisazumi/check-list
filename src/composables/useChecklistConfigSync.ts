import { ref, watch, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import type { User } from 'firebase/auth'
import type { Unsubscribe } from 'firebase/firestore'
import {
  subscribeChecklistsConfig,
  subscribeChecklistIds,
  saveChecklistsConfig,
  saveChecklistLabel,
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
  let lastSavedIds = ''
  let lastSavedLabels = ''
  let configLoaded = false
  let configOrderedIds: string[] | null = null
  let checklistDocsInfo: Array<{ id: string; label?: string }> = []

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
    const ids = checklists.value.map(c => c.id)
    const idsJson = JSON.stringify(ids)
    const labelsJson = JSON.stringify(Object.fromEntries(checklists.value.map(c => [c.id, c.label])))
    if (idsJson === lastSavedIds && labelsJson === lastSavedLabels) return

    isSavingToFirestore = true
    try {
      if (idsJson !== lastSavedIds) {
        await saveChecklistsConfig(uid, ids)
        lastSavedIds = idsJson
      }
      if (labelsJson !== lastSavedLabels) {
        await Promise.all(checklists.value.map(c => saveChecklistLabel(uid, c.id, c.label)))
        lastSavedLabels = labelsJson
      }
    } finally {
      isSavingToFirestore = false
    }
  }

  // config の IDs とチェックリスト document のラベルを組み合わせて checklists を構築する
  const rebuildFromFirestoreData = () => {
    if (configOrderedIds === null) return

    const docsMap = new Map(checklistDocsInfo.map(d => [d.id, d.label]))
    const existingMap = new Map(checklists.value.map(c => [c.id, c]))

    const configChecklists = configOrderedIds.map(id => ({
      id,
      label: docsMap.get(id) ?? existingMap.get(id)?.label ?? id,
      initialItems: existingMap.get(id)?.initialItems ?? ([] as ChecklistConfig['initialItems'])
    }))

    // config にないが checklists コレクションに存在するものを追加
    const configIdSet = new Set(configOrderedIds)
    const orphans = checklistDocsInfo
      .filter(d => !configIdSet.has(d.id))
      .map(d => ({
        id: d.id,
        label: d.label ?? 'チェックリスト',
        initialItems: [] as ChecklistConfig['initialItems']
      }))

    checklists.value = [...configChecklists, ...orphans]

    if (!checklists.value.find(c => c.id === activeView.value) && checklists.value.length > 0) {
      activeView.value = checklists.value[0].id
    }
  }

  const stopFirestoreSync = () => {
    if (configUnsubscribe) {
      configUnsubscribe()
      configUnsubscribe = null
    }
    if (checklistIdsUnsubscribe) {
      checklistIdsUnsubscribe()
      checklistIdsUnsubscribe = null
    }
  }

  const startFirestoreSync = (uid: string) => {
    stopFirestoreSync()
    configLoaded = false
    configOrderedIds = null
    checklistDocsInfo = []

    configUnsubscribe = subscribeChecklistsConfig(uid, (ids) => {
      if (isSavingToFirestore) return
      configLoaded = true

      if (ids !== null) {
        const idsJson = JSON.stringify(ids)
        if (idsJson === lastSavedIds) return
        lastSavedIds = idsJson
        configOrderedIds = ids
        rebuildFromFirestoreData()
      } else {
        // Firestore に config がなければ現在の状態を保存
        saveToFirestore(uid)
      }
    })

    checklistIdsUnsubscribe = subscribeChecklistIds(uid, (docs) => {
      checklistDocsInfo = docs
      if (configLoaded) {
        rebuildFromFirestoreData()
      }
    })
  }

  watch(user, (newUser, oldUser) => {
    if (newUser) {
      lastSavedIds = ''
      lastSavedLabels = ''
      loadFromLocalStorage()
      startFirestoreSync(newUser.uid)
    } else if (oldUser && !newUser) {
      stopFirestoreSync()
      lastSavedIds = ''
      lastSavedLabels = ''
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

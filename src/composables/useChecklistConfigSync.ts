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
  // config 保存中のみ true にする（ラベル保存は含めない）
  let isSavingToFirestore = false
  let lastSavedIds = ''
  let lastSavedLabels = ''
  let configLoaded = false
  let remoteConfigIds: string[] | null = null
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

  // ラベルを既存ドキュメントのみに非ブロッキングで保存する
  // isSavingToFirestore の外で呼ぶことで、ラベル保存中でも削除等が即座に保存できる
  const saveLabelsToDocs = (uid: string) => {
    const existingDocIds = new Set(checklistDocsInfo.map(d => d.id))
    const targets = checklists.value.filter(c => existingDocIds.has(c.id))
    const labelsJson = JSON.stringify(Object.fromEntries(targets.map(c => [c.id, c.label])))
    if (labelsJson === lastSavedLabels) return
    lastSavedLabels = labelsJson
    targets.forEach(c => saveChecklistLabel(uid, c.id, c.label).catch(console.error))
  }

  const saveToFirestore = async (uid: string) => {
    const ids = checklists.value.map(c => c.id)
    const idsJson = JSON.stringify(ids)
    if (idsJson === lastSavedIds) {
      // IDs に変更がなくてもラベルが変わっている場合は保存
      saveLabelsToDocs(uid)
      return
    }

    isSavingToFirestore = true
    try {
      await saveChecklistsConfig(uid, ids)
      lastSavedIds = idsJson
    } finally {
      isSavingToFirestore = false
    }

    // config 保存が完了してから非ブロッキングでラベルを保存
    saveLabelsToDocs(uid)
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
    remoteConfigIds = null
    checklistDocsInfo = []

    // config subscription: 順序・一覧の正とする。orphan 検出もここで行う
    configUnsubscribe = subscribeChecklistsConfig(uid, (ids) => {
      if (isSavingToFirestore) return
      configLoaded = true

      if (ids !== null) {
        const idsJson = JSON.stringify(ids)
        if (idsJson === lastSavedIds) return
        lastSavedIds = idsJson
        remoteConfigIds = ids

        const docsMap = new Map(checklistDocsInfo.map(d => [d.id, d.label]))
        const existingMap = new Map(checklists.value.map(c => [c.id, c]))

        const configChecklists = ids.map(id => ({
          id,
          label: docsMap.get(id) ?? existingMap.get(id)?.label ?? id,
          initialItems: existingMap.get(id)?.initialItems ?? ([] as ChecklistConfig['initialItems'])
        }))

        // config にないが checklists コレクションに存在するものを orphan として追加
        const configIdSet = new Set(ids)
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
      } else {
        // Firestore に config がなければ現在の状態を保存
        saveToFirestore(uid)
      }
    })

    // checklistIds subscription: ラベル更新のみ担当。orphan 検出は config subscription に委ねる
    // （削除直後は document がまだ存在しうるため、ここで orphan 判定すると削除済みリストが復活する）
    checklistIdsUnsubscribe = subscribeChecklistIds(uid, (docs) => {
      checklistDocsInfo = docs
      if (!configLoaded || remoteConfigIds === null) return

      const docsMap = new Map(docs.map(d => [d.id, d.label]))

      // ローカルに存在するチェックリストのラベルのみ更新
      let changed = false
      const updated = checklists.value.map(c => {
        const remoteLabel = docsMap.get(c.id)
        if (remoteLabel !== undefined && remoteLabel !== c.label) {
          changed = true
          return { ...c, label: remoteLabel }
        }
        return c
      })

      // remoteConfigIds にも localState にもない document だけ orphan として追加
      const localIds = new Set(checklists.value.map(c => c.id))
      const remoteConfigIdSet = new Set(remoteConfigIds)
      const newOrphans = docs
        .filter(d => !remoteConfigIdSet.has(d.id) && !localIds.has(d.id))
        .map(d => ({
          id: d.id,
          label: d.label ?? 'チェックリスト',
          initialItems: [] as ChecklistConfig['initialItems']
        }))

      if (changed || newOrphans.length > 0) {
        checklists.value = [...updated, ...newOrphans]
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

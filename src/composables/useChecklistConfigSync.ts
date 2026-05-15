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
    id: 'morning',
    label: '朝やること',
    initialItems: [
      { id: 'morning-tea-coffee', label: '紅茶、コーヒー' },
      { id: 'morning-lunch', label: '弁当' },
      { id: 'morning-breakfast', label: '朝食' },
      { id: 'morning-medicine', label: 'クスリ' },
      { id: 'morning-prewash', label: '予洗い' },
      { id: 'morning-bag', label: 'カバンの中' },
      { id: 'morning-garbage', label: 'ゴミまとめ' },
      { id: 'morning-preparation', label: '出発準備' },
      { id: 'morning-change', label: '着替え' },
      { id: 'morning-brush', label: '歯みがき' },
    ]
  },
  {
    id: 'bag',
    label: 'カバンの中',
    initialItems: [
      { id: 'bag-mask', label: 'マスク、手帳、教材' },
      { id: 'bag-keys', label: 'カギ、イヤホン、社員証' },
      { id: 'bag-card-case', label: '名刺入れ、クシ、ハンカチ' },
      { id: 'bag-pen-case', label: '筆箱、充電器、財布、(日傘)' },
      { id: 'bag-pouch', label: 'ポーチ類、(化粧ポーチ)' },
      { id: 'bag-lunch', label: '弁当、カトラリー' },
      { id: 'bag-toothbrush', label: '(歯ブラシ)' },
      { id: 'bag-bottle', label: '水筒' },
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

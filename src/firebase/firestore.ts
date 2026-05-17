import {
  doc,
  collection,
  setDoc,
  deleteDoc,
  onSnapshot,
  type Unsubscribe
} from 'firebase/firestore'
import { db } from './index'

export interface ChecklistItem {
  id: string
  label: string
}

export interface ChecklistConfig {
  id: string
  label: string
  initialItems: ChecklistItem[]
}

export interface ChecklistData {
  customItems: ChecklistItem[]
  order: string[]
  checkedItems: Record<string, boolean>
  // Legacy fields, no longer written (kept for migration reads)
  customLabels?: Record<string, string>
  deletedInitialIds?: string[]
}

// ユーザーのチェックリスト設定をリアルタイム購読
export function subscribeChecklistsConfig(
  uid: string,
  callback: (checklists: ChecklistConfig[] | null) => void
): Unsubscribe {
  const ref = doc(db, 'users', uid, 'data', 'config')
  return onSnapshot(ref, (snap) => {
    if (snap.exists()) {
      const data = snap.data()
      const rawChecklists = data.checklists as (string | ChecklistConfig)[]
      const labels: Record<string, string> = data.labels ?? {}
      const checklists: ChecklistConfig[] = rawChecklists.map(item => {
        if (typeof item === 'string') {
          return { id: item, label: labels[item] ?? item, initialItems: [] }
        } else {
          // 旧フォーマット（移行用）: オブジェクト形式
          return { id: item.id, label: item.label, initialItems: [] }
        }
      })
      callback(checklists)
    } else {
      callback(null)
    }
  })
}

// ユーザーのチェックリスト設定を保存（checklists にはIDのみ、ラベルは labels フィールドで管理）
export async function saveChecklistsConfig(uid: string, checklists: ChecklistConfig[]): Promise<void> {
  const ref = doc(db, 'users', uid, 'data', 'config')
  const ids = checklists.map(c => c.id)
  const labels: Record<string, string> = {}
  checklists.forEach(c => { labels[c.id] = c.label })
  await setDoc(ref, { checklists: ids, labels })
}

// checklists コレクション内のドキュメント ID 一覧をリアルタイム購読
export function subscribeChecklistIds(
  uid: string,
  callback: (ids: string[]) => void
): Unsubscribe {
  const ref = collection(db, 'users', uid, 'checklists')
  return onSnapshot(ref, (snap) => {
    callback(snap.docs.map(d => d.id))
  })
}

// チェックリストデータをリアルタイム購読
export function subscribeChecklistData(
  uid: string,
  checklistId: string,
  callback: (data: ChecklistData | null) => void
): Unsubscribe {
  const ref = doc(db, 'users', uid, 'checklists', checklistId)
  return onSnapshot(ref, (snap) => {
    if (snap.exists()) {
      callback(snap.data() as ChecklistData)
    } else {
      callback(null)
    }
  })
}

// チェックリストデータを保存
export async function saveChecklistData(
  uid: string,
  checklistId: string,
  data: ChecklistData
): Promise<void> {
  const ref = doc(db, 'users', uid, 'checklists', checklistId)
  await setDoc(ref, data)
}

// チェックリストデータを削除
export async function deleteChecklistData(uid: string, checklistId: string): Promise<void> {
  const ref = doc(db, 'users', uid, 'checklists', checklistId)
  await deleteDoc(ref)
}

import {
  doc,
  getDoc,
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
  customLabels: Record<string, string>
}

// ユーザーのチェックリスト設定を取得
export async function loadChecklistsConfig(uid: string): Promise<ChecklistConfig[] | null> {
  const ref = doc(db, 'users', uid, 'data', 'config')
  const snap = await getDoc(ref)
  if (snap.exists()) {
    return snap.data().checklists as ChecklistConfig[]
  }
  return null
}

// ユーザーのチェックリスト設定をリアルタイム購読
export function subscribeChecklistsConfig(
  uid: string,
  callback: (checklists: ChecklistConfig[] | null) => void
): Unsubscribe {
  const ref = doc(db, 'users', uid, 'data', 'config')
  return onSnapshot(ref, (snap) => {
    if (snap.exists()) {
      callback(snap.data().checklists as ChecklistConfig[])
    } else {
      callback(null)
    }
  })
}

// ユーザーのチェックリスト設定を保存
export async function saveChecklistsConfig(uid: string, checklists: ChecklistConfig[]): Promise<void> {
  const ref = doc(db, 'users', uid, 'data', 'config')
  await setDoc(ref, { checklists })
}

// チェックリストデータを取得
export async function loadChecklistData(uid: string, checklistId: string): Promise<ChecklistData | null> {
  const ref = doc(db, 'users', uid, 'checklists', checklistId)
  const snap = await getDoc(ref)
  if (snap.exists()) {
    return snap.data() as ChecklistData
  }
  return null
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

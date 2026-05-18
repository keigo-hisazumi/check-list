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
  label?: string
  // Legacy fields, no longer written (kept for migration reads)
  customLabels?: Record<string, string>
  deletedInitialIds?: string[]
}

// ユーザーのチェックリスト設定をリアルタイム購読（config には ID のみ保持）
export function subscribeChecklistsConfig(
  uid: string,
  callback: (ids: string[] | null) => void
): Unsubscribe {
  const ref = doc(db, 'users', uid, 'data', 'config')
  return onSnapshot(ref, (snap) => {
    if (snap.exists()) {
      const data = snap.data()
      const raw = data.checklists as (string | { id: string })[]
      // 旧フォーマット（オブジェクト配列）からの移行に対応
      const ids = raw.map(item => (typeof item === 'string' ? item : item.id))
      callback(ids)
    } else {
      callback(null)
    }
  })
}

// ユーザーのチェックリスト設定を保存（ID のみ）
export async function saveChecklistsConfig(uid: string, ids: string[]): Promise<void> {
  const ref = doc(db, 'users', uid, 'data', 'config')
  await setDoc(ref, { checklists: ids })
}

// checklists コレクション内のドキュメント ID とラベルをリアルタイム購読
export function subscribeChecklistIds(
  uid: string,
  callback: (docs: Array<{ id: string; label?: string }>) => void
): Unsubscribe {
  const ref = collection(db, 'users', uid, 'checklists')
  return onSnapshot(ref, (snap) => {
    callback(snap.docs.map(d => ({ id: d.id, label: d.data().label as string | undefined })))
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

// チェックリストのラベルのみを保存（マージ書き込み）
export async function saveChecklistLabel(
  uid: string,
  checklistId: string,
  label: string
): Promise<void> {
  const ref = doc(db, 'users', uid, 'checklists', checklistId)
  await setDoc(ref, { label }, { merge: true })
}

// チェックリストデータを削除
export async function deleteChecklistData(uid: string, checklistId: string): Promise<void> {
  const ref = doc(db, 'users', uid, 'checklists', checklistId)
  await deleteDoc(ref)
}

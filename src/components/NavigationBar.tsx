import React, { useRef, useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Modal,
  Platform,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import type { User } from 'firebase/auth'
import type { ChecklistConfig } from '../firebase/firestore'
import { PromptModal } from './PromptModal'

interface Props {
  checklists: ChecklistConfig[]
  activeChecklistId: string
  isEditMode: boolean
  user: User
  stats: { completedCount: number; totalCount: number }
  onNavChange: (id: string) => void
  onAddChecklist: (name: string) => void
  onUpdateChecklistName: (id: string, name: string) => void
  onSignOut: () => void
  onEdit: () => void
  onResetOrDelete: () => void
}

export function NavigationBar({
  checklists,
  activeChecklistId,
  isEditMode,
  user,
  stats,
  onNavChange,
  onAddChecklist,
  onUpdateChecklistName,
  onSignOut,
  onEdit,
  onResetOrDelete,
}: Props) {
  const insets = useSafeAreaInsets()
  const scrollRef = useRef<ScrollView>(null)
  const [menuVisible, setMenuVisible] = useState(false)
  const [addModalVisible, setAddModalVisible] = useState(false)
  const [renameModalVisible, setRenameModalVisible] = useState(false)
  const activeChecklist = checklists.find((c) => c.id === activeChecklistId)

  // Scroll active tab into view
  useEffect(() => {
    const index = checklists.findIndex((c) => c.id === activeChecklistId)
    if (index >= 0 && scrollRef.current) {
      scrollRef.current.scrollTo({ x: index * 110, animated: true })
    }
  }, [activeChecklistId, checklists])

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Top row: tabs or rename input */}
      <View style={styles.topRow}>
        {isEditMode ? (
          <TouchableOpacity
            style={styles.renameTouchable}
            onPress={() => setRenameModalVisible(true)}
          >
            <Text style={styles.renameText} numberOfLines={1}>
              {activeChecklist?.label ?? ''}
            </Text>
          </TouchableOpacity>
        ) : (
          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tabScroll}
            contentContainerStyle={styles.tabContent}
          >
            {checklists.map((c) => (
              <TouchableOpacity
                key={c.id}
                style={[styles.tab, c.id === activeChecklistId && styles.tabActive]}
                onPress={() => onNavChange(c.id)}
              >
                <Text
                  style={[styles.tabText, c.id === activeChecklistId && styles.tabTextActive]}
                  numberOfLines={1}
                >
                  {c.label}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.addTabBtn} onPress={() => setAddModalVisible(true)}>
              <Text style={styles.addTabText}>＋</Text>
            </TouchableOpacity>
          </ScrollView>
        )}

        {/* User avatar */}
        {!isEditMode && (
          <TouchableOpacity style={styles.avatarBtn} onPress={() => setMenuVisible(true)}>
            {user.photoURL ? (
              <Image source={{ uri: user.photoURL }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarFallback}>
                <Text style={styles.avatarText}>
                  {(user.displayName ?? user.email ?? '?')[0].toUpperCase()}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>

      {/* Action bar */}
      <View style={styles.actionBar}>
        <Text style={styles.progress}>
          {stats.completedCount} / {stats.totalCount} 完了
        </Text>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={[styles.editBtn, isEditMode && styles.editBtnActive]}
            onPress={onEdit}
          >
            <Text style={[styles.editBtnText, isEditMode && styles.editBtnTextActive]}>
              {isEditMode ? '編集完了' : '項目を編集'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.resetBtn,
              isEditMode && styles.deleteListBtn,
              isEditMode && checklists.length <= 1 && styles.disabledBtn,
            ]}
            onPress={onResetOrDelete}
            disabled={isEditMode && checklists.length <= 1}
          >
            <Text style={styles.resetBtnText}>
              {isEditMode ? 'リストを削除' : 'すべてリセット'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* User menu modal */}
      <Modal visible={menuVisible} transparent animationType="fade" onRequestClose={() => setMenuVisible(false)}>
        <TouchableOpacity style={styles.menuOverlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menu}>
            <Text style={styles.menuEmail} numberOfLines={1}>
              {user.email ?? user.displayName}
            </Text>
            <View style={styles.menuDivider} />
            <TouchableOpacity
              style={styles.menuSignout}
              onPress={() => { setMenuVisible(false); onSignOut() }}
            >
              <Text style={styles.menuSignoutText}>ログアウト</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Add checklist modal */}
      <PromptModal
        visible={addModalVisible}
        title="新しいチェックリストの名前を入力してください"
        placeholder="チェックリスト名"
        onConfirm={(name) => {
          onAddChecklist(name)
          setAddModalVisible(false)
        }}
        onCancel={() => setAddModalVisible(false)}
      />

      {/* Rename checklist modal */}
      <PromptModal
        visible={renameModalVisible}
        title="チェックリスト名を変更"
        defaultValue={activeChecklist?.label ?? ''}
        onConfirm={(name) => {
          if (activeChecklistId) onUpdateChecklistName(activeChecklistId, name)
          setRenameModalVisible(false)
        }}
        onCancel={() => setRenameModalVisible(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 100,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tabScroll: {
    flex: 1,
  },
  tabContent: {
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 4,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    minWidth: 90,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#f0f3ff',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6c757d',
  },
  tabTextActive: {
    color: '#667eea',
  },
  addTabBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 50,
    alignItems: 'center',
  },
  addTabText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#667eea',
  },
  avatarBtn: {
    marginLeft: 8,
    padding: 4,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#667eea',
  },
  avatarFallback: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  renameTouchable: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#667eea',
    borderRadius: 10,
    margin: 4,
  },
  renameText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    gap: 8,
  },
  progress: {
    fontSize: 14,
    fontWeight: '700',
    color: '#667eea',
    flexShrink: 0,
  },
  btnGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  editBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#667eea',
    backgroundColor: '#f0f0f0',
  },
  editBtnActive: {
    backgroundColor: '#667eea',
  },
  editBtnText: {
    fontSize: 13,
    color: '#667eea',
    fontWeight: '500',
  },
  editBtnTextActive: {
    color: 'white',
  },
  resetBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#667eea',
  },
  deleteListBtn: {
    backgroundColor: '#dc3545',
  },
  disabledBtn: {
    opacity: 0.4,
  },
  resetBtnText: {
    fontSize: 13,
    color: 'white',
    fontWeight: '500',
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 80,
    paddingRight: 16,
  },
  menu: {
    backgroundColor: 'white',
    borderRadius: 12,
    minWidth: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
    overflow: 'hidden',
  },
  menuEmail: {
    padding: 16,
    fontSize: 13,
    color: '#888',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  menuSignout: {
    padding: 16,
  },
  menuSignoutText: {
    fontSize: 15,
    color: '#dc3545',
  },
})

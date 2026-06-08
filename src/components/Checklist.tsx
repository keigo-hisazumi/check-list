import React, { forwardRef, useImperativeHandle, useCallback, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import DraggableFlatList, {
  type RenderItemParams,
} from 'react-native-draggable-flatlist'
import type { User } from 'firebase/auth'
import { useChecklist } from '../hooks/useChecklist'
import { ChecklistItem } from './ChecklistItem'
import { PromptModal } from './PromptModal'
import { ConfirmModal } from './ConfirmModal'
import type { ChecklistItem as Item, ChecklistConfig } from '../firebase/firestore'

interface Props {
  checklist: ChecklistConfig
  user: User
  isActive: boolean
  isEditMode: boolean
  onStatsChange: (stats: { completedCount: number; totalCount: number }) => void
}

export interface ChecklistHandle {
  handleReset: () => void
  stopFirestoreSync: () => void
}

export const Checklist = forwardRef<ChecklistHandle, Props>(
  ({ checklist, user, isActive, isEditMode, onStatsChange }, ref) => {
    const [addModalVisible, setAddModalVisible] = useState(false)
    const [deleteTarget, setDeleteTarget] = useState<Item | null>(null)

    const {
      items,
      checkedState,
      handleCheck,
      handleReset,
      updateItems,
      addItem,
      updateItemLabel,
      deleteItem,
      stopFirestoreSync,
    } = useChecklist({
      checklistId: checklist.id,
      label: checklist.label,
      initialItems: checklist.initialItems,
      uid: user.uid,
      isActive,
      onStatsChange,
    })

    useImperativeHandle(ref, () => ({ handleReset, stopFirestoreSync }), [handleReset, stopFirestoreSync])

    const renderItem = useCallback(
      ({ item, drag, isActive: isDragging }: RenderItemParams<Item>) => (
        <ChecklistItem
          id={item.id}
          label={item.label}
          checked={!!checkedState[item.id]}
          isEditMode={isEditMode}
          isDragging={isDragging}
          drag={isEditMode ? drag : undefined}
          onCheck={() => handleCheck(item.id)}
          onDelete={() => setDeleteTarget(item)}
          onUpdateLabel={(label) => updateItemLabel(item.id, label)}
        />
      ),
      [checkedState, isEditMode, handleCheck, updateItemLabel],
    )

    return (
      <View style={styles.container}>
        <DraggableFlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          onDragEnd={({ data }) => updateItems(data)}
          activationDistance={isEditMode ? 1 : 1000}
          contentContainerStyle={styles.listContent}
          ListFooterComponent={
            isEditMode ? (
              <TouchableOpacity style={styles.addBtn} onPress={() => setAddModalVisible(true)}>
                <Text style={styles.addBtnText}>＋ 新しい項目を追加</Text>
              </TouchableOpacity>
            ) : null
          }
        />
        <PromptModal
          visible={addModalVisible}
          title="新しい項目を追加"
          placeholder="項目名を入力"
          onConfirm={(text) => {
            addItem(text)
            setAddModalVisible(false)
          }}
          onCancel={() => setAddModalVisible(false)}
        />
        <ConfirmModal
          visible={deleteTarget !== null}
          title="項目を削除"
          message={deleteTarget ? `「${deleteTarget.label}」を削除しますか？` : undefined}
          onConfirm={() => {
            if (deleteTarget) deleteItem(deleteTarget.id)
            setDeleteTarget(null)
          }}
          onCancel={() => setDeleteTarget(null)}
        />
      </View>
    )
  },
)

Checklist.displayName = 'Checklist'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  addBtn: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#667eea',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
    backgroundColor: '#f8f9fa',
  },
  addBtnText: {
    color: '#667eea',
    fontSize: 16,
    fontWeight: '500',
  },
})

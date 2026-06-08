import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { PromptModal } from './PromptModal'

interface Props {
  id: string
  label: string
  checked: boolean
  isEditMode: boolean
  isDragging?: boolean
  drag?: () => void
  onCheck: () => void
  onDelete: () => void
  onUpdateLabel: (label: string) => void
}

export function ChecklistItem({
  id,
  label,
  checked,
  isEditMode,
  isDragging,
  drag,
  onCheck,
  onDelete,
  onUpdateLabel,
}: Props) {
  const [editModalVisible, setEditModalVisible] = useState(false)

  const itemStyle = [
    styles.item,
    checked && styles.itemChecked,
    isDragging && styles.itemDragging,
  ]

  const modal = (
    <PromptModal
      visible={editModalVisible}
      title="項目名を編集"
      defaultValue={label}
      onConfirm={(text) => {
        onUpdateLabel(text)
        setEditModalVisible(false)
      }}
      onCancel={() => setEditModalVisible(false)}
    />
  )

  if (isEditMode) {
    return (
      <View style={itemStyle}>
        <TouchableOpacity onLongPress={drag} delayLongPress={0} style={styles.dragHandle}>
          <Text style={styles.dragIcon}>⠿</Text>
        </TouchableOpacity>

        <Text style={[styles.label, checked && styles.labelChecked]} numberOfLines={2}>
          {label}
        </Text>

        <View style={styles.editActions}>
          <TouchableOpacity style={styles.editBtn} onPress={() => setEditModalVisible(true)}>
            <Text style={styles.editIcon}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
            <Text style={styles.deleteIcon}>🗑️</Text>
          </TouchableOpacity>
        </View>

        {modal}
      </View>
    )
  }

  return (
    <TouchableOpacity style={itemStyle} onPress={onCheck} activeOpacity={0.7}>
      <Text style={[styles.label, checked && styles.labelChecked]} numberOfLines={2}>
        {label}
      </Text>

      <View style={styles.checkBtn}>
        {checked ? (
          <Text style={styles.checkMark}>✓</Text>
        ) : (
          <View style={styles.emptyCheck} />
        )}
      </View>

      {modal}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 6,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    minHeight: 48,
  },
  itemChecked: {
    backgroundColor: '#d4edda',
    opacity: 0.7,
  },
  itemDragging: {
    opacity: 0.9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  dragHandle: {
    paddingRight: 8,
    paddingVertical: 4,
  },
  dragIcon: {
    fontSize: 20,
    color: '#aaa',
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  labelChecked: {
    textDecorationLine: 'line-through',
    color: '#6c757d',
  },
  checkBtn: {
    width: 28,
    height: 28,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    fontSize: 20,
    color: '#667eea',
    fontWeight: '700',
  },
  emptyCheck: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  editActions: {
    flexDirection: 'row',
    gap: 4,
    marginLeft: 8,
  },
  editBtn: {
    padding: 6,
  },
  editIcon: {
    fontSize: 18,
  },
  deleteBtn: {
    padding: 6,
  },
  deleteIcon: {
    fontSize: 18,
  },
})

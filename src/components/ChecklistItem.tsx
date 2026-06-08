import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg'
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

function PencilIcon({ size = 20, color = '#667eea' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function TrashIcon({ size = 20, color = '#dc3545' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 11v6M14 11v6"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </Svg>
  )
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
        <TouchableOpacity onPressIn={drag} style={styles.dragHandle}>
          <Text style={styles.dragIcon}>⠿</Text>
        </TouchableOpacity>

        <Text style={[styles.label, checked && styles.labelChecked]} numberOfLines={2}>
          {label}
        </Text>

        <View style={styles.editActions}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => setEditModalVisible(true)}>
            <PencilIcon size={20} color="#667eea" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} onPress={onDelete}>
            <TrashIcon size={20} color="#dc3545" />
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
  iconBtn: {
    padding: 4,
  },
})

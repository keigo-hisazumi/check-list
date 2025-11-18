import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // チェックリスト項目の定義
  const checklistItems = [
    { id: 'mask', label: 'マスク、手帳、教材' },
    { id: 'keys', label: 'カギ、イヤホン、社員証' },
    { id: 'card-case', label: '名刺入れ、クシ、ハンカチ' },
    { id: 'pen-case', label: '筆箱、充電器、財布、', optional: '(日傘)' },
    { id: 'pouch', label: 'ポーチ類、', optional: '(化粧ポーチ)' },
    { id: 'lunch', label: '弁当、カトラリー' },
    { id: 'toothbrush', label: '', optional: '(歯ブラシ)' },
    { id: 'bottle', label: '水筒' },
  ]

  // ローカルストレージからチェック状態を初期化
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = {}
    checklistItems.forEach(item => {
      const value = localStorage.getItem(item.id)
      saved[item.id] = value === 'true'
    })
    return saved
  })

  // チェック状態が変わったらローカルストレージに保存
  useEffect(() => {
    Object.entries(checkedItems).forEach(([id, checked]) => {
      localStorage.setItem(id, checked)
    })
  }, [checkedItems])

  // チェックボックスの変更ハンドラー
  const handleCheckChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // リセットボタンのハンドラー
  const handleReset = () => {
    if (window.confirm('すべてのチェックをリセットしますか？')) {
      const resetState = {}
      checklistItems.forEach(item => {
        resetState[item.id] = false
        localStorage.removeItem(item.id)
      })
      setCheckedItems(resetState)
    }
  }

  // 完了数を計算
  const completedCount = Object.values(checkedItems).filter(Boolean).length
  const totalCount = checklistItems.length

  return (
    <div className="app">
      <div className="container">
        <h1>📋 チェックリスト</h1>
        <ul className="checklist">
          {checklistItems.map(item => (
            <li
              key={item.id}
              className={`checklist-item ${checkedItems[item.id] ? 'checked' : ''}`}
              onClick={() => handleCheckChange(item.id)}
            >
              <input
                type="checkbox"
                id={item.id}
                checked={checkedItems[item.id]}
                onChange={() => handleCheckChange(item.id)}
                onClick={(e) => e.stopPropagation()}
              />
              <label htmlFor={item.id}>
                {item.label}
                {item.optional && <span className="optional">{item.optional}</span>}
              </label>
            </li>
          ))}
        </ul>
        <div className="progress">
          {completedCount} / {totalCount} 完了
        </div>
        <button className="reset-button" onClick={handleReset}>
          すべてリセット
        </button>
      </div>
    </div>
  )
}

export default App

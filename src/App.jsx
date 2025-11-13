import { useState } from 'react'
import './App.css'

function App() {
  const rows = [
    { label: 'All pages', type: 'heading' },
    { label: 'Page 1' },
    { label: 'Page 2' },
    { label: 'Page 3' },
    { label: 'Page 4' },
  ]

  const [checkedItems, setCheckedItems] = useState(new Set())

  const toggleCheckbox = (label) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(label)) {
        newSet.delete(label)
      } else {
        newSet.add(label)
      }
      return newSet
    })
  }

  return (
    <div className="page">
      <div className="page-card">
        <div className="page-list">
          {rows.map(({ label, type }) => (
            <div 
              key={label} 
              className={`page-row ${type ?? ''}`}
              onClick={() => toggleCheckbox(label)}
            >
              <span className={`page-label ${type === 'heading' ? 'bold' : ''}`}>
                {label}
              </span>
              <span 
                className={`page-checkbox ${checkedItems.has(label) ? 'checked' : ''}`}
                tabIndex={0}
              />
            </div>
          ))}
        </div>
        <button className="page-button">Done</button>
      </div>
    </div>
  )
}

export default App

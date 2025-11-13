import './App.css'

function App() {
  const rows = [
    { label: 'All pages', type: 'heading' },
    { label: 'Page 1' },
    { label: 'Page 2' },
    { label: 'Page 3' },
    { label: 'Page 4' },
  ]

  return (
    <div className="page">
      <div className="page-card">
        <div className="page-list">
          {rows.map(({ label, type }) => (
            <div key={label} className={`page-row ${type ?? ''}`}>
              <span className={`page-label ${type === 'heading' ? 'bold' : ''}`}>
                {label}
              </span>
              <span className="page-checkbox checked" />
            </div>
          ))}
        </div>
        <button className="page-button">Done</button>
      </div>
    </div>
  )
}

export default App

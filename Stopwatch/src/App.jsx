import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState([])
  const [lastLapTime, setLastLapTime] = useState(0)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault()
        isRunning ? handleStop() : handleStart()
      } else if (e.code === 'KeyL') {
        handleLap()
      } else if (e.code === 'KeyR') {
        handleReset()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isRunning, time])

  const handleStart = () => setIsRunning(true)
  const handleStop = () => setIsRunning(false)
  const handleReset = () => {
    setTime(0)
    setIsRunning(false)
    setLaps([])
    setLastLapTime(0)
  }

  const handleLap = () => {
    if (isRunning || time > 0) {
      const lapTime = time - lastLapTime
      setLaps([...laps, { id: laps.length + 1, lapTime, totalTime: time }])
      setLastLapTime(time)
    }
  }

  const clearLaps = () => {
    setLaps([])
    setLastLapTime(0)
  }

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000)
    const minutes = Math.floor((ms % 3600000) / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    const milliseconds = Math.floor((ms % 1000) / 10)

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`
  }

  const getBestLapTime = () => {
    if (laps.length === 0) return null
    return Math.min(...laps.map(lap => lap.lapTime))
  }

  const bestLapTime = getBestLapTime()

  return (
    <div className={`stopwatch-app ${theme}`}>
      <div className="stopwatch-container">
        <div className="header">
          <h1>⏱️ Advanced Stopwatch</h1>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <div className="main-section">
          <div className="display-wrapper">
            <div className={`display ${isRunning ? 'running' : ''}`}>
              {formatTime(time)}
            </div>
            {isRunning && <div className="pulse"></div>}
          </div>

          <div className="stats">
            <div className="stat-item">
              <span className="stat-label">Laps</span>
              <span className="stat-value">{laps.length}</span>
            </div>
            {bestLapTime && (
              <div className="stat-item">
                <span className="stat-label">Best Lap</span>
                <span className="stat-value">{formatTime(bestLapTime)}</span>
              </div>
            )}
          </div>

          <div className="buttons">
            <button 
              className="btn btn-start" 
              onClick={handleStart} 
              disabled={isRunning}
              title="Space to start/stop"
            >
              ▶ Start
            </button>
            <button 
              className="btn btn-stop" 
              onClick={handleStop} 
              disabled={!isRunning}
              title="Space to start/stop"
            >
              ⏸ Stop
            </button>
            <button 
              className="btn btn-lap" 
              onClick={handleLap}
              disabled={time === 0}
              title="L to record lap"
            >
              📍 Lap
            </button>
            <button 
              className="btn btn-reset" 
              onClick={handleReset}
              title="R to reset"
            >
              🔄 Reset
            </button>
          </div>

          <div className="keyboard-info">
            <small>⌨️ Shortcuts: Space (Start/Stop) | L (Lap) | R (Reset)</small>
          </div>
        </div>

        {laps.length > 0 && (
          <div className="laps-section">
            <div className="laps-header">
              <h2>📋 Lap Times ({laps.length})</h2>
              <button className="clear-laps" onClick={clearLaps}>Clear</button>
            </div>
            <div className="laps-list">
              {[...laps].reverse().map((lap, index) => (
                <div 
                  key={lap.id} 
                  className={`lap-item ${lap.lapTime === bestLapTime ? 'best-lap' : ''}`}
                >
                  <span className="lap-number">Lap {laps.length - index}</span>
                  <span className="lap-time">{formatTime(lap.lapTime)}</span>
                  <span className="lap-total">{formatTime(lap.totalTime)}</span>
                  {lap.lapTime === bestLapTime && <span className="best-badge">🏆 Best</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

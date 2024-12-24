import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskDay from './features/TaskDay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskDay />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Counter } from './features/counter/counter'
import { Users } from './features/users/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */ }
      <Users />
    </>
  )
}

export default App

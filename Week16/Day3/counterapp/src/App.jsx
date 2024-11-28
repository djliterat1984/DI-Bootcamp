import { useState } from 'react'
import './App.css'
import Counters from './components/Counters'
import Parent from './components/Parent'
import Child from './components/Child'
import CounterError from './components/CounterError'
import ErrorBoundary from './components/ErrorBoundary'

function App () {
  const [count, setCount] = useState(0)
  return (
    <>
      <Parent auth='admin'>
        <Child />
        <Counters count={count} onClick={setCount} />
      </Parent>
      <ErrorBoundary fallback='Counter 1 is down'>
        <CounterError />
      </ErrorBoundary>
      
      <ErrorBoundary fallback='Counter 2 is down'>
        <CounterError />
      </ErrorBoundary>
    </>
  )
}

export default App

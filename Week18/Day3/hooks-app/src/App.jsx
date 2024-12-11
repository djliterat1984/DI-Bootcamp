import { useState } from 'react'
import './App.css'
import { DisplayCounter } from './components/DisplayCounter'
import { Action } from './components/Action'
import { createContext } from 'react'

export const AppContext = createContext();

/*
* create context
* share context in provider - value ({}) 
* useContext  

*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContext.Provider value={({count,setCount, name:"John"})}>
      <DisplayCounter />
      <Action/>
    </AppContext.Provider>
  )
}

export default App

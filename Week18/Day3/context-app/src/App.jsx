import { useState, createContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main';

export const AppContext = createContext();

function App() {
  const [mode, setMode] = useState('light')

  
  return (
    <AppContext.Provider value={{ mode, setMode}}>
      <h2>App ThemeMode</h2>
      <Header />
      <Main />
    </AppContext.Provider>
  )
}

export default App

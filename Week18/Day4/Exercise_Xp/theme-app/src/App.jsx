import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { Counter } from './components/Counter'

export const ThemeContext = createContext();


function App() {
  const [ theme, setTheme ] = useState('light')

  return (
    <ThemeContext.Provider value={ { theme, setTheme } }>
      <h2>Theme Switcher</h2>
      <ThemeSwitcher />
      <hr />
      <h2>Counter</h2>
      <Counter />
    </ThemeContext.Provider>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRef from './AppRef.jsx'
import { AppMemo } from './AppMemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppMemo />
  </StrictMode>,
)

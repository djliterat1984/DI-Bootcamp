import { useState } from 'react'
import './App.css'
import QuoteCard from './components/QuoteCard'
import useScreenSize from './hooks/useScreenSize';

function App () {
  
  const {width, height} = useScreenSize()
  return (
    <div>
      <QuoteCard />
    </div>
  )
}

export default App

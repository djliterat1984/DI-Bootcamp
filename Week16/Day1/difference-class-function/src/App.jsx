import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExampleFunctionComponent from './components/exampleFunctionComp'
import ExampleClassComponent from './components/exampleClassComponent'
import exampleUnmount from './components/exampleUnmount'

function App () {
  const [unmount, setUnmount] = useState()
  return (
    <>
      {/* <ExampleFunctionComponent/> */}
      {/* <ExampleClassComponent a='1' b='2' c={[1,2,3]} /> */ }
      <button onClick={() => setUnmount(!unmount)}>
        {unmount ? "Mount" : "Unmount"}
      </button>
      { unmount ? null : <exampleUnmount /> }
    </>
  )
}

export default App

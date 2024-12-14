import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
  const [ dataText, setDataText ] = useState( '' )
  const [ postText, setPostText ] = useState( '' );
  
  
  const handleData = async() => {
    const response = await fetch( 'http://localhost:3001/api/route' )
    console.log(response);
    
    const data = await response.text();
    setDataText( data );
  }
  
  useEffect(() => {
    return () => {
      handleData()
    }
  }, [])
  
  const handleSubmit = async( event ) => {
    event.preventDefault();
    const inputValue = event.target[ 0 ].value;
    console.log(inputValue);
    const response = await fetch( 'http://localhost:3001/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data:inputValue})
    } )
    const data = await response.text();
    setPostText( data );
  }

  return (
    <>
      <header>{ dataText }</header>
      <form onSubmit={(event) => handleSubmit(event)} action="" method="post">
        <input type="text" />
        <input type="submit" value="Submit" />
        <h2>{postText}</h2>
      </form>
    </>
  )
}

export default App

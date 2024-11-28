import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // const [ name, setName ] = useState( '' );
  // const [ num, setNum ] = useState( 0 )
  // const [ text, setText ] = useState( '' )
  // const [ yesNo, setYesNo ] = useState( false )
  
  const [ inputs, setInputs ] = useState( {

  } );
  
  const handleSubmit = (  ) => {
    // e.preventDefalut();
    console.log( inputs );
  };
  
  const handleInputs = ( e) => {
    console.log('hola');
    
    console.log( e.target.name, e.target.type );
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    console.log(value);
    
    setInputs( { ...inputs, [ e.target.name ]: value } )
  };
  
  return (
    <>
      <h2>Forms in React</h2>
      <form id='inputs' onSubmit={ ( e ) => {
        e.preventDefault()
        handleSubmit(  )
      } }>
        <input name='firstname' placeholder='First Name' onChange={(e) => handleInputs(e)}/><br/>
      
        <br />
        
        <select name='num' onChange={(e) => handleInputs(e)} >
          <option value={1}>one</option>
          <option value={2}>two</option>
          <option value={3}>three</option>
        </select>
        <br />
        
        <textarea onChange={ ( e ) => handleInputs(e) } name="text" id="" />
        <br />
        
        <input type="checkbox" onChange={ ( e ) => handleInputs(e) } name="checked" id="" />
        
      <input type='submit' value={ 'Send' } />
      </form>
    </>
  )
}

export default App

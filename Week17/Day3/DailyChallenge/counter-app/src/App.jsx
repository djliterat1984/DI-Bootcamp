import { useState } from 'react'
import './App.css'

function App() {
  const [ result, setResult ] = useState( 0 )
  const [ operation, setOperation ] = useState( 'Add' );

  const addItems = (e) => {
    e.preventDefault();
    const num1 = Number( e.target[ 0 ].value );
    const num2 = Number( e.target[ 1 ].value );
    let total = 0
    if ( operation === 'Add' )
      total = num1 + num2;
    else if ( operation === 'Subs' )
      total = num1 - num2 ;
    else if ( operation === 'mult' )
      total = num1 * num2 ;
    else
      total = num1 / num2 ;
    
    total = Math.round( total * 100 ) / 100
    setResult( total )
    e.target[ 0 ].value='';
    e.target[ 1 ].value='';
  }
  
  const handleSelectedOperation = (e) => {
    e.preventDefault();
    const selectedOperation = e.target.value;
    setOperation(selectedOperation)
  }
  return (
    <div className='appContainer'>
      <label style={{fontSize:'50px'}}>Add two numbers</label>
      <form className='formNumbers' onSubmit={ ( event ) => addItems( event ) } action="">
        <div className='inputContainer'>
          <input className='inputNumber' type="number" name="num1" id="num1" />
          <input className='inputNumber' type="number" name="num2" id="num2" />
        </div>
        <div className='inputContainer'>
          <select name='selectedOperation' onChange={(event)=>handleSelectedOperation(event)} style={{fontSize:'50px'}} defaultValue='add'>
            <option value='Add'>+</option>
            <option value='Subs'>-</option>
            <option value='Mult'>*</option>
            <option value='Div'>/</option>
          </select>
        <input className='submitBtn' type="submit" name="Add them!" value={`${operation} Them!`} id="" />
        </div>
      </form>
      <label style={{fontSize:'60px'}}>{result}</label>
    </div>
  )
}

export default App

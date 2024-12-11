import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import CheckboxInput from './components/CheckboxInput'
import { Select } from './components/Select'
import { UserInfo } from './components/UserInfo'

function App () {
  
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState()
  const [gender, setGender] = useState('')
  const [destination, setDestination] = useState('')
  const [isNutsFree, setIsNutsFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [ isVegan, setIsVegan ] = useState( false )
  
  const travelOptions = [
    '-- Please Choose a destination --',
    'Brazil',
    'Thailand',
    'India'
  ]
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    
    if ( name === 'firstname' )
      setFirstname( value );
    else if ( name === 'lastname' )
      setLastname( value );
    else if ( name === 'age' )
      setAge( value );
    else if ( name === 'destination' )
      setDestination( value );
    else if ( name === 'nutsFree' )
      setIsNutsFree( !isNutsFree );
    else if ( name === 'lactoseFree' )
      setIsLactoseFree( !isLactoseFree );
    else if ( name === 'vegan' )
      setIsVegan(!isVegan)
  }

  return (
    <>
      <h1>Sample Form</h1>
      <form action="">
        <Input name='firstname' placeholder='First Name' onChange={(event) => handleChange(event)} /><br />
        <Input name='lastname' placeholder='Last Name' onChange={(event) => handleChange(event)} /><br />
        <Input name='age' placeholder='Age' onChange={(event) => handleChange(event)}/><br /><br />
        
        <CheckboxInput
          detail='Male'
          checked={ gender === 'male' }
          onChange={() => setGender('male')}
        /><br />
        
        <CheckboxInput
          detail='Female'
          checked={ gender === 'female' }
          onChange={() => setGender('female')}
        /><br />
        ç
        <Select
          title='Select your destination'
          options={ travelOptions }
          name='destination'
          onChange={ ( event ) => handleChange( event ) }
        />
        
        <div>
          <CheckboxInput
            detail='Nuts Free'
            checked={isNutsFree}
            onChange={ ( event ) => handleChange( event ) } 
            name="nutsFree"
          />
          <br />
          <CheckboxInput
            detail='Lactose Free'
            checked={ isLactoseFree }
            onChange={ ( event ) => handleChange( event ) } 
            name="lactoseFree"
          />
          <br />
          <CheckboxInput
            detail='Vegan'
            checked={ isVegan }
            onChange={ ( event ) => handleChange( event ) } 
            name="vegan"
          /><br />
        </div>
        <input type="submit" value="Submit" />
      </form>
      
      <hr />
      
      <UserInfo
        firstname={ firstname }
        lastname={ lastname }
        age={ age }
        gender={ gender }
        destination={ destination }
        isNutsFree={ isNutsFree }
        isLactoseFree={ isLactoseFree }
        isVegan={ isVegan }
      />
    </>
  )
}

export default App

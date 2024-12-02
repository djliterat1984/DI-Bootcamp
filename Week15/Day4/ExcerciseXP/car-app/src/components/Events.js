import {useState} from 'react'
const ENTER_KEY = 'Enter'

const clickMe = () => alert( 'I was clicked' );

const handleKeyDown = ( props ) => {
	const value = props.target.value;
	const key = props.key;
	if ( key === ENTER_KEY )
		alert( `The EnterKey was pressed, your input is: ${ value }` );
}


const Events = () => {
	
	const [ isToggleOn, setIsToggleOn ] = useState( true );
	
	return (
		<>
			<button onClick={ () => clickMe() }>Click me</button> <br/><br/>
			<input type='text' placeholder='Press the ENTER key' onKeyDown={ ( keyProps ) => handleKeyDown( keyProps ) } /><br/><br/>
			<button onClick={() => setIsToggleOn(!isToggleOn)}>Switch ON/OFF</button>
			<div>
				<h3>Exercise 9:</h3>
				<h3>{ isToggleOn ? 'ON' : 'OFF' }</h3>
			</div>
		</>
	)
}

export default Events
import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useRef } from 'react'

export const AddTask = () => {

	const titleRef = useRef()	
	const completedRef = useRef()
	const { dispatch } = useContext( AppContext )
	
	const handleNewtask = () => {
		dispatch( { type: 'ADD_TASK', payload: { text: titleRef.current.value, completed: completedRef.current.checked } } )
		titleRef.current.value = ''
		completedRef.current.checked = false;
	}
	
	return (
		<div style={ { display: 'flex', justifyContent:'center'}}>
			<input ref={ titleRef } style={ { height: '25px', margin: '10px' } } type="text" placeholder='Text' />
			<input type="checkbox" style={{margin:'10px'}} ref={completedRef}/>
			<label style={{margin:'10px'}}>Completed</label>
			<button  style={{margin:'10px'}} onClick={() => handleNewtask()}>Add Task</button>
		</div>
	)
}
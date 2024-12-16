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
		<div>
			<input ref={ titleRef } style={ { height: '25px', margin: 0 } } type="text" placeholder='Text' />
			<input type="checkbox" ref={completedRef}/>
			<label>Completed</label>
			<button  onClick={() => handleNewtask()}>Add Task</button>
		</div>
	)
}
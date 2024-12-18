import React,{ useRef }from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add } from './tasksSlice';

export const TaskInput = () => {
	
	const dispatch = useDispatch();
	
	const addTask = () => {
		console.log(String());
		
		
	}
	
	const taskRef = useRef()
	const dateRef = useRef()
	return (
		<>
			<input ref={taskRef} type="text" name="" id="" placeholder='Add Task' />
			<input type='date' ref={dateRef}/>
			<button onClick={ () =>  dispatch( add({ task: taskRef.current.value, date:dateRef.current.value } ) )}>Add task</button>
		</>
	)
}

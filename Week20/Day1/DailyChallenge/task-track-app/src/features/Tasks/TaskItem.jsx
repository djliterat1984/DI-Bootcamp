import React from 'react'
import { useEditTask, useFilterByCompleted, useFilterById, useFilteredTasks, useRemoveTask, useSelectTaskId, useTasksSelector, useUpdateStatus } from './state/hooks'
import ActionButton from '../ActionButton';
import { useState, useRef } from 'react';

const TaskItem = () => {
	const callRemoveTask = useRemoveTask();
	const callEditTask = useEditTask();
	const callUpdateStatus = useUpdateStatus()
	const tasks = useFilteredTasks()
	const completedTasks = useFilterByCompleted();	
	const searchedTask = useRef()
	const editTaskText = (text, id) => {
		const newText = prompt( `This is your task:${ text }` )
		callEditTask(newText, id) 
	}
	
	const taskById = useFilterById();
	const callSelectTaskId = useSelectTaskId(); 
	
	const [showHideCompleted, setShowHideCompleted] = useState(false)
	console.log(tasks);

	
	return (
		<div>
			{
				tasks.map( item => {
					return (
						<div key={ item.id } style={{display:'flex'}}>
							<input type='checkbox' checked={item.completed} />
							<h3>{ item.task } - {item.category}</h3>
							<ActionButton title='Remove Task' handleClicked={() => callRemoveTask( item.id ) } />
							<ActionButton title='Edit Task' handleClicked={() => editTaskText(item.task, item.id) } />
							<ActionButton title='Update status' handleClicked={() => callUpdateStatus( item.id ) } />
						</div>
					)
				} )
			}
			
			<button style={{marginTop:'30px'}} onClick={() => setShowHideCompleted(!showHideCompleted)}>Show/Hide Completed Tasks</button>
			
			{
				showHideCompleted && <h2>Completed Tasks</h2>
			}
			{
				showHideCompleted &&
				completedTasks.map( item => {
					return (
						<div key={item.id}>
							<h3>{ item.task } - { item.category }</h3>
						</div>
					)
				} )
			}
			<br/>
			
			<div style={{marginTop:'30px'}}>
				<label>Search your task by ID: </label>
				<input ref={ searchedTask } type="text" />
				<button onClick={() => callSelectTaskId(searchedTask.current.value)}>Search</button>
			</div>
			{
				taskById.length > 0 && <h3>{taskById[0].task} - {taskById[0].category}</h3>
			}
		</div>
	)
}

export default TaskItem
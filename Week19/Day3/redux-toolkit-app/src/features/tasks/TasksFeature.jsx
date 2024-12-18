import React from 'react'
import { TaskInput } from './TaskInput'
import { TaskList } from './TaskList'

export const TasksFeature = () => {
	return (
		<>
			<h2 style={{color:'black'}}>Tasks:</h2>
			<TaskInput />
			<TaskList />
		</>
	)
}

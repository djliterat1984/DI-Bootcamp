import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export const TaskList = () => {
	const tasks = useSelector( state => state.appReducer.taskReducer.tasks)
	
	return (
		<div>
			{ tasks.map( item => {
				return (
					<div key={item.id}>
						<h4 >{ item.text } {item.date}</h4> 
					</div>
			)} ) }
		</div>
	)
}

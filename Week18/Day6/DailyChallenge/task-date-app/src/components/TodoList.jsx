import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addTask, editTask, removeTask } from '../redux/actions';

const TodoList = ( props ) => {
	const dispatch = useDispatch();
	const tasks = useSelector( state => state.tasks );
	const taskName = useRef();
	const date = useRef();
		
	return (
		<>
			<h2>ToDo</h2>
			<input ref={date} type="date" name="" id="" />
			<input type='text' ref={ taskName } />
			<button onClick={() => dispatch(addTask({task:taskName.current.value, day:date.current.value}))}>Add Task</button>
			{	
				tasks.map( ( item ) => {
				return (
					<div style={{display:'flex',justifyContent:'space-evenly'}} key={item.id}>
						<h3>{ item.day }</h3>
						<div style={ { display: 'flex', flexDirection: 'column' } }>
							{								
								item.taskList.map( taskItem => { 
								return (
									<div style={{display:'flex', flexDirection:'row'}} key={taskItem.id}>
										<h4 style={{marginLeft:'20px'}}>{ taskItem.task }</h4>
										<button onClick={ () => {
											const newContent = prompt('Edit the task content:')
											dispatch( editTask( {day:item.day, task:newContent, id:taskItem.id}) )
										} }>Edit</button>
										<button onClick={() => dispatch(removeTask({day:item.day, id:taskItem.id})) }>Delete</button>
									</div>
								)
							} )
							}
							</div>
					</div>	
				)
			} )
			}
		</>
	)
}

export default TodoList;

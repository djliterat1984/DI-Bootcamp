import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addTask, editTask, removeTask } from '../redux/actions';

const TodoList = ( props ) => {
	const dispatch = useDispatch();
	const todos = useSelector( state => state.todos );
	const taskName = useRef()
	
	return (
		<>
			<h2>ToDo</h2>
			<input type='text' ref={taskName} />
			<button onClick={() => dispatch(addTask(taskName.current.value))}>Add Task</button>
			{ todos.map( ( item ) => {
				return (
					<div style={{display:'flex',justifyContent:'space-evenly'}} key={item.id}>
						<input type="checkbox" checked={ item.completed } />
						<h3>{ item.todo }</h3>
						<button onClick={ () => dispatch( editTask( item.id ) ) }>Completed</button>
						<button onClick={() => dispatch(removeTask(item.id))}>Remove</button>
					</div>	
				)
			} ) }
		</>
	)
}

export default TodoList;

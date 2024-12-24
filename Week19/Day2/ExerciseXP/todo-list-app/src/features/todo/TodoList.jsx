import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector( state => state.appReducer.todoReducer.todoList );
	const newTask = useRef()
	
	return (
		<div>
			<h4>TodoList</h4>
			<input ref={newTask} type="text" name="" id="" />
			<button onClick={ () => dispatch( addTodo(newTask.current.value) ) }>Add task</button>
			{
				todos.map( item => {
					return (
						<div style={{display:'flex', width:'300px',justifyContent:'space-evenly', alignItems:'center'}} key={item.id}>
							<input type='checkbox' checked={item.completed} />
							<h5>{ item.todo }</h5>
							<button style={ { height: '40px', width:"130px" } } onClick={ () => dispatch( toggleTodo( item.id ) ) }>
								{item.completed? 'Incompleted':'Completed'}
							</button>
							<button style={{height: '40px'}} onClick={() => dispatch(removeTodo(item.id))}>Remove</button>
						</div>
					)
				} )
			}
		
		
		</div>
	)
}

export default TodoList;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todoList: [
		{ id: 0, todo: 'Todo1', completed: false },
		{ id: 1, todo: 'Todo2', completed: false },
		{ id: 2, todo: 'Todo3', completed: false }
	]
}

const todoSlice = createSlice( {
	name: 'todos',
	initialState,
	reducers: {
		addTodo: ( state, action ) => {
			return {
				...state,
				todoList: [ ...state.todoList, {id: state.todoList.length, todo: action.payload, completed: false } ]
			}
		},
		toggleTodo: ( state, action ) => {
			const todo = state.todoList.find( item => item.id === action.payload );
			if ( todo )
				todo.completed = !todo.completed;
		},
		removeTodo: ( state, action ) => {
			return {
				...state,
				todoList: state.todoList.filter(item => item.id !== action.payload)
			}
		}
	}
} )

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
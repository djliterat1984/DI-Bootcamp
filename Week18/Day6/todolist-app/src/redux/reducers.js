import {ADD, REMOVE, EDIT} from './actions';

const initialValue = {
	todos: [
		{id:1, todo: 'Todo1', completed:false},
		{id:2, todo: 'Todo2', completed:false},
		{id:3, todo: 'Todo3', completed:false}
	]
}

export const todoReducer = (state = initialValue, action) => {
	if ( action.type === ADD ) {
		return {
			...state,
			todos: [ ...state.todos,
				{id: state.todos.length + 1, todo: action.payload, completed: false}]
		}
	}
	else if ( action.type === REMOVE ) {
		return {
			...state,
			todos: state.todos.filter( ( todo ) => todo.id !== action.payload )
		}
	}
	else if ( action.type === EDIT ) {		
		const newState = { ...state };
		const newTodos = newState.todos.map(item => {
			if ( item.id == action.payload ) {
				item.completed = true;
			}
			return item;
		} )
		return { ...state, todos: [ ...newTodos ] };
	}
	return state;
}
const initialValue = {
	todos: [
		{id:1, todo: 'Todo1', completed:false},
		{id:2, todo: 'Todo2', completed:false},
		{id:3, todo: 'Todo3', completed:false}
	]
}

const actions = [
  { type: "todo/add" },
  { type: "todo/remove" },
  { type: "todo/editStatus" },
];

function add () {
	return {
		type: 'todo/add',
		payload: {}
	}
}

function remove() {
	return {
		type: 'todo/remove',
		payload: {}
	}
}

function edit() {
	return {
		type: 'todo/edit',
		payload: {}
	}
}

function todoReducer(state = initialValue, action) {
	if ( action.type === 'todo/add' ) {
		return {
			...state,
			todos: [ ...state.todos,
				{id: action.payload.id, todo: action.payload.todo, completed: action.payload.completed}]
		}
	}
	else if ( action.type === 'todo/remove' ) {
		return {
			...state,
			todo: state.todos.filter( ( todo ) => todo.id !== action.payload )
		}
	}
	else if(action.type === 'todo/editStatus'){
		const newArray = state.todo.map( item => {
			if ( item.id == action.payload.id ) {
				item.text = action.payload.text;
				item.completed = action.payload.completed;
			}
			return item;
		} )
		return {...state, tasks:[...newArray]};
	}
	return state;
}
import {ADD, REMOVE, EDIT} from './actions';

const initialValue = {
	tasks: [ { id: 0, day: new Date().toLocaleDateString(), taskList: [ { id: 100, task: 'task1' }, { id: 101, task: 'task2' }, { id: 102, task: 'task3' } ] } ]
}

export const tasksReducer = ( state = initialValue, action ) => {
	if ( action.type === ADD ) {	
		console.log(action.payload.day );
		
		const formattedDay = new Date( action.payload.day ).toLocaleDateString();
		const taskDayIndex = state.tasks.findIndex( item => item.day === formattedDay );
		if ( taskDayIndex == -1 ) {
			return {
				...state,
				tasks: [ ...state.tasks,
					{ id: state.tasks.length, day: formattedDay, taskList: [ {id: state.tasks.length = 100, task: action.payload.task }] } ]
			}
		}
		else {
			const newTasks = [ ...state.tasks ];
			newTasks[ taskDayIndex ].taskList.push( action.payload.task );
			
			return {
				...state,
				tasks: newTasks
			}
		}	
	}
	else if ( action.type === REMOVE ) {
		const formattedDay = new Date( action.payload.day ).toLocaleDateString();
		const taskDayIndex = state.tasks.findIndex( item => item.day === formattedDay );		
		const newTasks = [ ...state.tasks ];
		console.log(newTasks);
		
		const filteredTasks = newTasks[ taskDayIndex].taskList.filter( ( item )=> item.id !== action.payload.id )
		newTasks[ taskDayIndex ].taskList = filteredTasks;
		
		return {
			...state,
			tasks: newTasks
		}
	}
	else if ( action.type === EDIT ) {	
		const formattedDay = new Date( action.payload.day ).toLocaleDateString();
		const taskDayIndex = state.tasks.findIndex( item => item.day === formattedDay );		
		const newTasks = [ ...state.tasks ];
		const taskItem = newTasks[ taskDayIndex].taskList.find( ( item )=> item.id === action.payload.id )
		taskItem.task = action.payload.task;
			
		return {
			...state,
			tasks: newTasks
		}
	}
	return state;
}
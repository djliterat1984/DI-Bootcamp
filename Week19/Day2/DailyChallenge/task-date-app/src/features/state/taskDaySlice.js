import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	tasks: [
		{
			id: 0,
			day: new Date().toLocaleDateString(),
			taskList: [
				{ id: 100, task: 'task1' },
				{ id: 101, task: 'task2' },
				{ id: 102, task: 'task3' }
			]
		}
	],
	selectedDate: new Date().toLocaleDateString()
}

const taskDaySlice = createSlice( {
	name: 'taskDay',
	initialState,
	reducers: {
		add: ( state, action ) => {
			const formattedDay = new Date( action.payload.day ).toLocaleDateString();
			const taskDayIndex = state.tasks.findIndex( item => item.day === formattedDay );
			const newTask = { id: nanoid(), task: action.payload.task }
			if ( taskDayIndex == -1 )
				state.tasks.push({ id: state.tasks.length, day: formattedDay, taskList: [ newTask ] }) 				
			else
				state.tasks[taskDayIndex].taskList.push(newTask)
		},
		remove: ( state, action ) => {
			const formattedDay = new Date( action.payload.day ).toLocaleDateString();
			const taskDayIndex = state.tasks.findIndex( item => item.day === formattedDay );
			state.tasks[taskDayIndex].taskList = state.tasks[ taskDayIndex ].taskList.filter( ( item ) => item.id !== action.payload.id )
		},
		update: ( state, action ) => {
			const formattedDay = new Date( action.payload.day ).toLocaleDateString();
			const taskDayIndex = state.tasks.findIndex( item => item.day === formattedDay );
			const task = state.tasks[ taskDayIndex ].taskList.find( ( item ) => item.id === action.payload.id )
			task.task = action.payload.task;
		},
		updateDate: ( state, action ) => {
			state.selectedDate = new Date(action.payload).toLocaleDateString();
		}
	}
} )

export const { add, remove, update, updateDate } = taskDaySlice.actions;
export default taskDaySlice.reducer;
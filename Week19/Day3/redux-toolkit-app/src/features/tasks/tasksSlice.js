import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	tasks:[
		{ id: nanoid(), text: 'Task1',completed: false , date: new Date(2025,1,20).toLocaleDateString()},
		{ id: nanoid(), text: 'Task2', completed: false, date: new Date(2025,1,11).toLocaleDateString() },
		{ id: nanoid(), text: 'Task3', completed: false, date: new Date(2025,1,6).toLocaleDateString() },
	]
}


const taskSlice = createSlice( {
	name: 'tasks',
	initialState,
	reducers: {
		add: ( state, action ) => {
			state.tasks.push({id:nanoid(), text: action.payload.task, date: action.payload.date, completed:false})
		},
		remove: ( state, action ) => {

		}
	}
} )

export const { add } = taskSlice.actions;
export default taskSlice.reducer;
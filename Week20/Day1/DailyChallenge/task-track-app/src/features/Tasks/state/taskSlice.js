import { createSlice, nanoid } from "@reduxjs/toolkit";
// import booksData from './books.json';

const initialState = {
	tasks: [ { id: nanoid(), task: 'task1test', completed: false, category: 'Meetings' } ],
	taskId:''
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nanoid(),
				task: action.payload.task,
				category: action.payload.category,
				completed: false
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		editTask: ( state, action ) => {
			const task = state.tasks.find( item => item.id === action.payload.id );
			if ( task ) {
				task.task = action.payload.task;
			}
		},
		updateStatus: ( state, action ) => {
			const task = state.tasks.find( item => item.id === action.payload );
			if ( task ) {
				task.completed = !task.completed;
			}
		},	
		selectedTaskId: ( state, action ) => {			
			state.taskId = action.payload;
		}
  },
} );

export const state = (state) => state.taskReducer
export const tasks = ( state ) => state.taskReducer.tasks;
export const taskId = state => state.taskReducer.taskId; 

export const { addTask, removeTask, updateStatus, editTask, selectedTaskId } = taskSlice.actions;
export default taskSlice.reducer;

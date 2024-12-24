import { configureStore, combineReducers } from '@reduxjs/toolkit'; 
import taskReducer from '../features/state/taskDaySlice';

// import reducers 
// 

const appReducer = combineReducers( {
	taskReducer
} )

const taskStore = configureStore( {
	reducer: {appReducer}
} )

export default taskStore;



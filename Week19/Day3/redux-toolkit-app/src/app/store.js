import { configureStore, combineReducers } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/tasksSlice';
import counterReducer from '../features/counter/state/counterSlice';

const appReducer = combineReducers( {
	taskReducer,
	counterReducer
} )

const store = configureStore( {
	reducer: {appReducer}
} )

export default store;

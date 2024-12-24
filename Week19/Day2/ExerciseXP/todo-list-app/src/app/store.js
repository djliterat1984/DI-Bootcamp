import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; 

const appReducer = combineReducers( {
	todoReducer,
} )

const todoStore = configureStore( {
	reducer: {appReducer}
} )

export default todoStore;
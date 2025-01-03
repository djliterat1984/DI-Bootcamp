import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';
// import reducers 
// 

const appReducer = combineReducers( {
	counterReducer,
	usersReducer
} )

const taskStore = configureStore( {
	reducer: {appReducer}
} )

export default taskStore;


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';
// import reducers 
// 

const appReducer = combineReducers( {
	counterReducer,
	usersReducer
} )

const store = configureStore( {
	reducer: {appReducer}
} )

export default store;


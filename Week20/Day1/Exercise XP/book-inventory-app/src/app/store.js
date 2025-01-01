import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReducer from '../features/state/bookSlice.js';

const appReducer = combineReducers( {
	bookReducer,
} )

const store = configureStore( {
	reducer: appReducer,
	// middleware:{}
} )

export default store;
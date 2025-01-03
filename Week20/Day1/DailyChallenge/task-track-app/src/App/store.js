import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from '../features/Tasks/state/taskSlice.js';
import categoryReducer from '../features/Categories/state/categorySlice.js'

const appReducer = combineReducers( {
	taskReducer,categoryReducer
} )

const store = configureStore( {
	reducer: appReducer,
} )

export default store;
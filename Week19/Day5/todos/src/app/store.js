import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { myReduxLogger } from '../middlewares/reduxLogger';

// import reducers
import tasksReducer from "../features/tasks/state/slice";
import counterReducer from "../features/counter/state/slice";

const appReducer = combineReducers({
  // all the reducers
  tasksReducer,
  counterReducer
} );

const store = configureStore({
  reducer: appReducer,
  middleware: ( getDefaultMiddleware ) =>
     getDefaultMiddleware().concat( myReduxLogger, logger)
});

export default store;

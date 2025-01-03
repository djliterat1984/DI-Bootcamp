import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import reducers
import tasksReducer from "../features/tasks/state/slice";
import counterReducer from "../features/counter/state/slice";

const appReducer = combineReducers({
  // all the reducers
  tasksReducer,
  counterReducer
});

const store = configureStore({
  reducer: appReducer,
  middleware: ( getDefaultMiddleware ) => {
    console.log( getDefaultMiddleware );
    return getDefaultMiddleware()
    
  }
});

export default store;

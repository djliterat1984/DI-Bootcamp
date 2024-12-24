import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/state/postsSlice";
import userPostReducer from '../features/users/state/slice';
// import reducers


const appReducer = combineReducers({
  postsReducer,
  userPostReducer
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
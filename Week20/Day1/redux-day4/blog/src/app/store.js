import { configureStore, combineReducers } from "@reduxjs/toolkit";

/** import reducers */
import postsReducer from "../features/posts/state/slice";
import userPostReducer from '../features/users/state/slice';

const appReducer = combineReducers({
  /** add reducers */
  postsReducer,
  userPostReducer
});

const store = configureStore({
  reducer: appReducer,
});

export default store;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  userPosts: [],
  status: "eeeee", // loading, success, failed
};

export const fetchUserPosts = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get(POST_URL);
  return res.data;
});

const userPostsSlice = createSlice({
  name: "userPosts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.status = "success";
        const loadedUserPosts = action.payload;
        state.userPosts = loadedUserPosts;
      })
      .addCase(fetchUserPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const state = ( [ state ], (state) => {
	return state.userPosts; 
} );

export const {} = userPostsSlice.actions;
export default userPostsSlice.reducer;

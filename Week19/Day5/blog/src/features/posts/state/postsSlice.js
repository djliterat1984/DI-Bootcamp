import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
	posts: [],
	status:''//loading - success - failed
};

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await result.json();
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
	reducers: {
		addReaction: ( state, action ) => {
			const { id, name } = action.payload;
			const post = state.posts.find( ( item ) => item.id === id);
      if (post) {
        post.reactions[name]++;
      }
    },
	},
  extraReducers(builder) {
		builder
			.addCase( fetchPosts.pending, ( state, action ) => {
				console.log( "loading..." );
				state.status = "loading";
			} )
			.addCase( fetchPosts.fulfilled, ( state, action ) => {
				state.status = "success";			
				const loadedPosts = action.payload.map( (item) => {
					item.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
					return item
				} ); 
				state.posts = loadedPosts;
			})
			.addCase( fetchPosts.rejected, ( state, action ) => {
				console.log('error');
				state.status = 'failed'
			} )
  },
});

export const state = (state) => state.postsReducer;

export const { addReaction } = postsSlice.actions;
export default postsSlice.reducer;

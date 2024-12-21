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

export const fetchPosts2 = createAsyncThunk("posts/fetch", async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return result.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
	reducers: {
		add: ( state, action ) => {
			const id = action.payload.id - 1;
			const emojiName = action.payload.emoji;
			
			if ( emojiName === 'thumbsUp' )
				state.posts[ id ].thumbsUpCount += 1;
			else if ( emojiName === 'wow' )
				state.posts[ id ].wowCount += 1;
			else if ( emojiName === 'rocket' )
				state.posts[ id ].rocketCount += 1;
			else if ( emojiName === 'coffee' )
				state.posts[ id ].coffeeCount += 1;
			else if ( emojiName === 'heart' )
				state.posts[ id ].heartCount += 1;
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
				const resultPosts = action.payload;
				state.posts = resultPosts.map( item => { return { post: item, thumbsUpCount: 0, wowCount: 0, heartCount: 0, rocketCount: 0, coffeeCount: 0 } } ); 
			})
			.addCase( fetchPosts.rejected, ( state, action ) => {
				console.log('error');
				state.status = 'failed'
			} )
  },
});

export const { add } = postsSlice.actions;
export default postsSlice.reducer;

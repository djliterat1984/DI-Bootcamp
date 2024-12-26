import { createSlice, nanoid } from "@reduxjs/toolkit";
import booksData from './books.json';

const initialState = {
	books: booksData,
	genres: [],
	filtered: {books:[], currentGenre: ''},
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    add: (state, action) => {
      state.books.push({
        id: nanoid(),
				title: action.payload.title,
				author: action.payload.author,
				genres: action.payload.genres
      });

      // state.tasks = state.tasks.sort(
      //   (a, b) => new Date(a.duedate) - new Date(b.duedate)
      // );
    },
    remove: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
		},
		filterByGenre: ( state, action ) => {
			const books = state.books.filter( book => book.genre.includes( action.payload ) );
			const currentGenre = action.payload;
			state.filtered = {books, currentGenre}
		},	
    // active: (state, action) => {
    //   const book = state.books.find((book) => book.id === action.payload);
    //   if (task) {
    //     task.active = !task.active;
    //   }
    // },
  },
});

export const { add, remove, filterByGenre } = bookSlice.actions;
export default bookSlice.reducer;

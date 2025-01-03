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
    },
    remove: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
		},
		filterByGenre: ( state, action ) => {
			const books = state.books.filter( book => book.genre.includes( action.payload ) );
			const currentGenre = action.payload;
			state.filtered = {books, currentGenre}
		},	
  },
} );

export const state = (state) => state.bookReducer
export const books = ( state ) => state.bookReducer.books;
export const category = ( state ) => state.bookReducer.filtered.currentGenre;
export const filteredBooks = ( state ) => state.bookReducer.filtered;

export const { add, remove, filterByGenre } = bookSlice.actions;
export default bookSlice.reducer;

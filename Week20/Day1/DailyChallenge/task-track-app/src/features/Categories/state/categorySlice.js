import { createSlice, nanoid } from "@reduxjs/toolkit";
// import booksData from './books.json';

const initialState = {
	categories: [
		{ id: nanoid(), category: 'Research' },
		{ id: nanoid(), category: 'Writing' },
		{ id: nanoid(), category: 'Meetings' },
		{ id: nanoid(), category: 'Administrative' }
	],
	currentCategory: -1,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
		addCat: (state, action) => {
      state.categories.push({
        id: nanoid(),
				category: action.payload,
      });
    },
    removeCat: (state, action) => {
      state.categories = state.categories.filter((cat) => cat.id !== action.payload);
		},
		editCat: ( state, action ) => {
			const cat = state.categories.find( item => item.id === action.payload.id );
			if ( cat ) {				
				cat.category = action.payload.category;
			}
		},
		selectedCategory: ( state, action ) => {
			state.currentCategory = action.payload 
		},	
  },
} );

export const state = (state) => state.categoryReducer
export const categories = ( state ) => state.categoryReducer.categories;
export const category = ( state ) => state.categoryReducer.currentCategory;

export const { addCat, removeCat, editCat, selectedCategory } = categorySlice.actions;
export default categorySlice.reducer;

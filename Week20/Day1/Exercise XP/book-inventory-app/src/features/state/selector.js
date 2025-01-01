import { createSelector } from "@reduxjs/toolkit";
import { books, category, filteredBooks } from './bookSlice';  

export const selectBooks = createSelector( [ books ], ( books ) => {
	return books
} )

export const selectFilteredBooks = createSelector( [ filteredBooks ], ( filteredBooks ) => {
	return filteredBooks;
} )

// selectHorrorBooks, selectFantasyBooks, and selectScienceFictionBooks.
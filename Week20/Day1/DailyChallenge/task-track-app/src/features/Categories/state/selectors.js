import { createSelector } from '@reduxjs/toolkit'
import {state } from './categorySlice'

export const selectCategories = createSelector( [ state ], ( state ) => {
	return state.categories;
} )

export const selectCategory = createSelector( [ state ], ( state ) => {
	return state.currentCategory;
} )

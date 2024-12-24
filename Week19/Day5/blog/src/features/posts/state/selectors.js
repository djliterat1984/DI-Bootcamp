import { createSelector } from '@reduxjs/toolkit';
import { state } from './postsSlice';

export const selectPosts = createSelector( [ state ], ( state ) => {
	return state.posts;
} );

export const selectStatus = createSelector( [ state ], ( state ) => state.status );
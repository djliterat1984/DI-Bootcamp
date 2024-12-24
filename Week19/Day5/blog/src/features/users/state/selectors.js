import { createSelector } from '@reduxjs/toolkit';
import { state } from './slice';

export const selectUser = createSelector( [ state ], ( state ) => {
	return state.userPosts;
} );

// export const selectStatus = createSelector( [ state ], ( state ) => state.status );
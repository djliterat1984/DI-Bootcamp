import { createSelector } from '@reduxjs/toolkit'
import { tasks,taskId } from './taskSlice'
import { category } from '../../Categories/state/categorySlice';

export const selectTasksByCategory = createSelector( [ tasks, category], ( tasks, category) => {
	if ( category == -1 )
		return tasks;
	return tasks.filter( item => item.category == category );
} )

export const selectTasks = createSelector( [ tasks ], ( tasks ) => {
	return tasks;
} );

export const selectCompletedTasks = createSelector( [tasks], (tasks) => {
	return tasks.filter(item => item.completed)
} )

export const selectTaskById = createSelector( [ tasks, taskId ], ( tasks, taskId ) => {
	console.log(tasks, taskId);
	
	return tasks.filter( item => item.id === taskId );
} )









// selectTasksByCategory: Returns tasks belonging to a specific category.
// selectCompletedTasks: Computes the count of completed tasks.
// selectCategoryById: Returns category details based on ID.
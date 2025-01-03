import { useCallback } from 'react';
import { selectCompletedTasks, selectTaskById, selectTasks,  } from './selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, removeTask, selectedTaskId, updateStatus } from './taskSlice';
import { selectTasksByCategory } from './selectors';

export const useTasksSelector = () => {
	return useSelector( selectTasks );
}

export const useFilterByCategory = () => {
	const dispatch = useDispatch();
	return useCallback( () => {
		dispatch(selectTasksByCategory())
	},[dispatch] )
}

export const useAddTask = () => {
	const dispatch = useDispatch();
	return useCallback(
		(task, category) => {
			dispatch( addTask( task, category ) );
		}, [ dispatch ]
	)
}
export const useRemoveTask = () => {
	const dispatch = useDispatch();
	return useCallback(
		(id) => {
			dispatch( removeTask( id ) );
		}, [ dispatch ]
	)
}
export const useEditTask = () => {
	const dispatch = useDispatch();
	return useCallback(
		(task, id) => {
			dispatch( editTask( {task,id} ) );
		}, [ dispatch ]
	)
}

export const useUpdateStatus = () => {
	const dispatch = useDispatch();
	return useCallback(
		(id) => {
			dispatch( updateStatus( id ) );
		}, [ dispatch ]
	)
}

export const useFilteredTasks = () => {
	return useSelector(selectTasksByCategory)
}

export const useFilterByCompleted = () => {
	return useSelector( selectCompletedTasks );
}

export const useFilterById = () => {
	return useSelector( selectTaskById );
}

export const useSelectTaskId = () => {
	const dispatch = useDispatch();
	return useCallback(
		( taskId ) => {			
			dispatch( selectedTaskId( taskId ) );
		},[dispatch]
	)
}
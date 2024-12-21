export const ADD = 'add';
export const REMOVE = 'remove';
export const EDIT = 'edit';

export const addTask = ( task ) => {
	return {
		type: ADD,
		payload: task
	}
}

export const removeTask = (taskId) => {
	return {
		type: REMOVE,
		payload: taskId
	}
}

export const editTask = (taskId) => {
	return {
		type: EDIT,
		payload: taskId
	}
}
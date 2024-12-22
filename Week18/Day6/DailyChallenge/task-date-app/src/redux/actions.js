export const ADD = 'add';
export const REMOVE = 'remove';
export const EDIT = 'edit';

export const addTask = ( task) => {
	return {
		type: ADD,
		payload: task
	}
}

export const removeTask = (task) => {
	return {
		type: REMOVE,
		payload: task
	}
}

export const editTask = (task) => {
	return {
		type: EDIT,
		payload: task
	}
}
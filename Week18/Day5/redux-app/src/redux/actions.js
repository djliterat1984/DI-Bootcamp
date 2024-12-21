export const INCREMENT = 'add';
export const DECREMENT = 'minus';

export const addOne = () => {
	return {
		type: INCREMENT,
	};
};

export const minusOne = (value) => {
	return {
		type: DECREMENT,
		payload: value
	};
};
import { INCREMENT, DECREMENT } from './actions';

const initialState = {
	count: 890,
};

export const counterReducer = (state = initialState, action) => {
	if ( action.type === INCREMENT ) {
		return {...state, count: state.count + action.payload}
	}
	else if ( action.type === DECREMENT ) {
		return {...state, count: state.count - action.payload}
	}
	
	return state
}
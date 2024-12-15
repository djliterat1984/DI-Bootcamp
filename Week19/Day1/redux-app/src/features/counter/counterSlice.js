import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

const counterSlice = createSlice( {
	name: 'counter',
	initialState,
	reducers: {
		increment: ( state ) => {
			// return {...state, count:state + 1}
			state.count++;
		},
		decrement: ( state ) => {
			state.count--;
		},
		reset: ( state ) => {
			state.count = initialState.count;
		},
		incrementByNum: ( state, action ) => {
			console.log(action);
			state.count += Number(action.payload);
		},
		incrementByNum2: ( state, action ) => {
			console.log(action);
			state.count += Number(action.payload.num1) + Number(action.payload.num2);
		},
		incrementWithePrepare: {
			reducer ( state, action ) {
				console.log(action);
				state.count += action.payload;
			},
			prepare ( num1, num2 ) {
				console.log(action);
				return{payload: Number(num1) + Number(num2)};
			}
			
		},
	}, //actions

} );

export const { increment, decrement, reset, incrementByNum,incrementByNum2,incrementWithePrepare } = counterSlice.actions;
export default counterSlice.reducer;




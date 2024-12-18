import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

export const delay2Sec = createAsyncThunk( 'counter/delay', () => {
	return new Promise( ( res, rej ) => {
		setTimeout( () => {
			res( 1 )
		}, 2500 );
	} )
} );

const counterSlice = createSlice( {
	name: 'counter',
	initialState,
	reducers: {
		add: ( state ) => {
			// return {...state, count:state + 1}
			state.count++;
		},

	}, //actions
	extraReducers ( builder ) {
		builder
			.addCase( delay2Sec.pending, ( state, action ) => {
				console.log('Loading....');
				
			} )
			.addCase( delay2Sec.fulfilled, ( state, action ) => {
				console.log('====>',action.payload);
				
				state.count += Number(action.payload)
			})
			.addCase( delay2Sec.rejected, ( state, action ) => {
				console.log('rejected')
			} )
	}

} );

export const { add } = counterSlice.actions;
export default counterSlice.reducer;
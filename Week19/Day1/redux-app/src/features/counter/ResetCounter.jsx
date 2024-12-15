import React from 'react'
import { useDispatch } from 'react-redux';
import { reset } from './counterSlice';

export const ResetCounter = ( props ) => {
	const dispatch = useDispatch()
	
	return (
		<>
			<div>
				<button onClick={() => dispatch(reset())}>Reset</button>
			</div>
		</>
	)
}

export default ResetCounter;

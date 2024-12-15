import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import ResetCounter from './ResetCounter';
import { AddNumCounter } from './AddNumCounter';

export const Counter = ( props ) => {
	
	const count = useSelector( state => state.counterReducer.count )
	const dispatch = useDispatch()
	
	return (
		<>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<h2 style={{color:'black'}}>Count {count}</h2>
			<button onClick={ () => dispatch( decrement() ) }>Decrement</button>
			<ResetCounter />
			<AddNumCounter />
		</>
	)
}

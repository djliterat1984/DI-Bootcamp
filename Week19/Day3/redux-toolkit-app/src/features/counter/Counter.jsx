import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { add, delay2Sec } from '../counter/state/counterSlice';

export const Counter = () => {
	const dispatch = useDispatch()
	const count = useSelector( state => state.appReducer.counterReducer.count )
	// if()
	
	return (
		<>
			<h2>Counter {count}</h2>
			<button onClick={() => dispatch(add())}>Add</button>
			<button onClick={ () => dispatch( delay2Sec())}>Delay 2.5 sec</button>
		</>
	)
}

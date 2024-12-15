import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { incrementByNum,incrementByNum2, incrementWithePrepare } from './counterSlice';

export const AddNumCounter = () => {
	const dispatch = useDispatch();
	const numRef = useRef()
	const num1Ref = useRef();
	const num2Ref = useRef();
	const num3Ref = useRef();
	const num4Ref = useRef();
	
	return (
		<>
			<input ref={numRef} placeholder='AddNumber' type='text' />
			<button onClick={ () => dispatch( incrementByNum( numRef.current.value ) ) }>Add Number</button><br />
			<input ref={ num1Ref } placeholder='AddNumber' type='text' />
			<input ref={num2Ref} placeholder='AddNumber' type='text' />
			<button onClick={ () => dispatch( incrementByNum2( {num1: num1Ref.current.value, num2: num2Ref.current.value } ) ) }>Add Number</button>
			<input ref={ num3Ref } placeholder='AddNumber' type='text' />
			<input ref={num4Ref} placeholder='AddNumber' type='text' />
			<button onClick={() => dispatch(incrementWithePrepare(num3Ref.current.value,num4Ref.current.value))}>Add Number</button>
		</>
	)
}

import React, {useRef} from 'react'
import { useState } from 'react'

export const Counter = () => {
	const counterRef = useRef()
	const [inputLength, setInputLength] = useState(0)
	return (
		<div>
			<input type="text" ref={ counterRef } onChange={() => setInputLength(counterRef.current.value.length)} />
			<h2>{inputLength}</h2>
		</div>
	)
}
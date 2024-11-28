import { useState } from 'react'

const CounterError = ( props ) => {
	const [ count, setCount ] = useState( 0 )
	
	if ( count > 5 ) {
		throw new Error('ooooohhh!')
	}
	
	return (
		<>
			<h2>Counts: { count }</h2>
			<button onClick={() => setCount((prev) => prev + 1)}>+</button>
		</>
	)
}

export default CounterError
import { useState } from 'react'
import Garage from './Garage'

const Car = ( props ) => {
	const [color, setColor] = useState('white')
	
	const { name, model } = props.carInfo;
	return (
		<>
			<h2>This car is { color } { model }</h2>
			<Garage size="Small" />
		</>
	)
}

export default Car;
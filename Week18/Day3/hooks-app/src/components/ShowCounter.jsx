import React, {useContext} from 'react'
import { AppContext } from '../App';


export const ShowCounter = () => {
	const { count, name } = useContext( AppContext );
	return (
		<h2>Count: { count } {name}</h2>
	)
}

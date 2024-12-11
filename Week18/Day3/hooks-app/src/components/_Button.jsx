import React, {useContext} from 'react'
import { AppContext } from '../App';

export const _Button = () => {
	const { setCount } = useContext( AppContext );
	return (
		<button onClick={ () => setCount( ( count ) => count + 1 ) } >
				Add
			</ button >
	)
}

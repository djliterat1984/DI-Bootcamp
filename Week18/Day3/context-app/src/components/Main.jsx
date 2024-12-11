import React, {useContext} from 'react'
import { AppContext } from '../App'

export const Main = () => {
	const {mode } = useContext( AppContext );
		
	return (
		<div className={(mode === 'light')? 'dark': 'light'}>
			<h2>Main</h2>
		</div>
	)
}

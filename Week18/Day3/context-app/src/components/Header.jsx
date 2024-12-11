import React, {useContext} from 'react'
import { AppContext } from '../App'
import { useState } from 'react';

export const Header = () => {

	const {mode, setMode} = useContext(AppContext)
	
	return (
		<div className={(mode === 'light')? 'dark': 'light'}>
			<h2>Header</h2>
			<button onClick={ () => setMode( ( mode ) => mode === 'light' ? 'dark' : 'light' ) }>
				Change Mode: {(mode === 'light')? 'Dark Mode': 'Light Mode'}
			</button>
		</div>
	)
}

import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../App';

export const ThemeSwitcher = () => {
	const {theme,setTheme} = useContext( ThemeContext );
		
	return (
		<div className={theme}>
			<h1>Theme color</h1>
			<button className={theme} onClick={() => setTheme(theme==='light'? 'dark':'light')}>{theme === 'light'? 'Dark':'Light'}</button>
		</div>
	)
}

import React, {useState, useEffect} from 'react'

export default function Color () {
	
	useEffect( () => {
		return() => {
			alert( 'use effect reached' );
			setFavouriteColor( 'yellow' );
		}
	}, [])
	
	const [ favouriteColor, setFavouriteColor ] = useState( 'red' )

	return (
		<>
			<header>{ `My favourite color is ${ favouriteColor }` }</header>
			<button onClick={() => setFavouriteColor('blue') }>Change favourite color</button>
		</>
	)
}

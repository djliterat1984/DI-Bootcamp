import React from 'react'

const ActionButton = (props) => {
	const {title, handleClicked} = props
	return (
		<button onClick={ ( ) => handleClicked() } >{title}</button>  
	)
}

export default ActionButton
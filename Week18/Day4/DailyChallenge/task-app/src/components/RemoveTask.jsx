import React from 'react'

export const RemoveTask = ( props ) => {
	const { handleClick } = props;
	return (
		<div>
			<button onClick={() => handleClick()}>Remove</button>
		</div>
	)
}

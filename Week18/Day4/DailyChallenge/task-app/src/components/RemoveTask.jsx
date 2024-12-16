import React from 'react'

export const RemoveTask = ( props ) => {
	console.log(props);
	const { handleClick } = props;
	return (
		<div>
			<button onClick={() => handleClick()}>Remove</button>
		</div>
	)
}

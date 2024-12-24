import React from 'react'

const RemoveButton = ({onRemove}) => {
	return (
		<button onClick={() => onRemove() }>Delete</button>
	)
}

export default RemoveButton
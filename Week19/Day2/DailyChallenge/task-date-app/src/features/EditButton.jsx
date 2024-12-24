import React from 'react'

const EditButton = ( {onUpdate} ) => {
	return (
		<button onClick={ () => {
			const newContent = prompt( 'Edit the task content:' )
			console.log(newContent);
			if ( newContent ) {
				onUpdate( newContent )
			}
		} }>Edit</button>
	)
}

export default EditButton;

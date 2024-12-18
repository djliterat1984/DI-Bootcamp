import React from 'react'

export const FilterTask = ( props ) => {
	const { handleFilter } = props;
	
	return (
		<div>
			<button onClick={() => handleFilter('completed')}>Completed tasks</button>
			<button onClick={() => handleFilter('all')}>All tasks</button>
		</div>
	)
}

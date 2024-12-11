import {memo} from 'react'

const ToDo = ( {tasks} ) => {
	console.log('render todo....');
	return (
		<div>
			{
				tasks.map( item =>{
					return <h2>item</h2>}

				)
			} 
		</div>
	)
}

export default memo( ToDo );
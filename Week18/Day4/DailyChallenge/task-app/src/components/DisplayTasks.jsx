import React, { useContext } from 'react'
import { AppContext } from '../App'
import { RemoveTask } from './RemoveTask'

export const DisplayTasks = () => {
	const { tasks, dispatch } = useContext(AppContext)
	
	return (
		<div>
			<ul>
				{ tasks.map( ( item) => {
					
					return (
						<div key={item.id} style={ { display: 'flex', justifyContent:'space-evenly'}}>
							<input type="checkbox" checked={item.completed} />
							<h3>{ item.text }</h3>
							<RemoveTask handleClick={() => dispatch({type:'REMOVE_TASK', payload: item.id})} />
						</div>
					)
				} ) }
			</ul>
		</div>
	)
}

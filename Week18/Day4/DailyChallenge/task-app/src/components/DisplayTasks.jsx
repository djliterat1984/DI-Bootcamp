import React, { useContext } from 'react'
import { AppContext } from '../App'
import { RemoveTask } from './RemoveTask'
import { EditTask } from './EditTask'
import {FilterTask} from './FilterTask'

export const DisplayTasks = () => {
	const { state, dispatch } = useContext(AppContext)
	if(state.filteredTasks.length > 0){
		state.filteredTasks.map(item => {})
	}
	
	
	return (
		<div>
			<FilterTask handleFilter={ (filter) => { dispatch( {type:'FILTER_TASK', payload:filter} )} } />
			<ul>
				{
					state.filteredTasks.length == 0 ?
					state.tasks.map( ( item ) => {
				
						return (
							<div key={ item.id } style={ { display: 'flex', justifyContent: 'center' } }>
								<input style={ { margin: '10px' } } type="checkbox" checked={ item.completed } />
								<h3 style={ { margin: '10px' } }>{ item.text }</h3>
								<RemoveTask style={ { margin: '10px' } } handleClick={ () => dispatch( { type: 'REMOVE_TASK', payload: item.id } ) } />
								<EditTask item={ item } handleEdit={ ( text, completed ) => dispatch( { type: 'EDIT_TASK', payload: { id: item.id, text, completed } } ) } style={ { margin: '10px' } } />
							</div>
						)
					} )
						:
					state.filteredTasks.map( ( item ) => {
						return (
							<div key={ item.id } style={ { display: 'flex', justifyContent: 'center' } }>
								<input style={ { margin: '10px' } } type="checkbox" checked={ item.completed } />
								<h3 style={ { margin: '10px' } }>{ item.text }</h3>
							</div>
						)
					})
				}
			</ul>
		</div>
	)
}

import React from 'react'
import { useCategoriesSelector } from '../Categories/state/hooks'

const Categories = ( props ) => {
	const {onSelectedOption} = props
	const categories = useCategoriesSelector();
	
	return (
		<div>
			<select onChange={ ( e ) => {
				onSelectedOption( e.target.value, e.target.selectedOptions[0].id )
			} }>
				<option value={-1} id={-1}>Search by category</option>
				{ categories.map( cat => {
					return (
						<option key={cat.id} id={cat.id}>{cat.category}</option>
					)
				} ) }
			</select>
		</div>
	)
}

export default Categories
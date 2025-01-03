import React from 'react'
import Categories from './Categories'
import { useState } from 'react'
import ActionButton from '../ActionButton'
import { useRemoveCat } from '../Categories/state/hooks'

const RemoveCategory = () => {
	const callRemoveCategory = useRemoveCat()
	
	const [selectedCategory, setSelectedCategory] = useState('')
	const getSelectedCategory = (category, id) => {
		setSelectedCategory( id );
	}
	
	const removeCategory = () => {
		callRemoveCategory(selectedCategory)
	}
	
	return (
		<div>
			<h3>Remove Categories</h3>
			<Categories onSelectedOption={ getSelectedCategory } />
			<ActionButton title='Remove Category' handleClicked={removeCategory} />
		</div>
	)
}

export default RemoveCategory
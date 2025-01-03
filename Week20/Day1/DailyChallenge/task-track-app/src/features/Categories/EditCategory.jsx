import React from 'react'
import Categories from './Categories'
import { useRef, useState } from 'react'
import ActionButton from '../ActionButton'
import { useEditCat } from '../Categories/state/hooks'

const EditCategory = () => {
	const callEditCategory = useEditCat();
	const editedCategory = useRef()
	const [ selectedCategory, setSelectedCategory ] = useState('')
	
	const getSelectedCategory = (category,id) => {
		setSelectedCategory( id )
	}
	
	const editCat = () => {
		callEditCategory( editedCategory.current.value, selectedCategory );
		editedCategory.current.value = '';
	}
	
	return (
		<div>
			<h3>Edit Category</h3>
			<Categories onSelectedOption={ getSelectedCategory } />
			<input ref={ editedCategory } type="text" />
			<ActionButton title='Edit category' handleClicked={editCat} />
		</div>
	)
}

export default EditCategory
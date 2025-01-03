import React,{ useState, useRef } from 'react'
import Categories from '../Categories/Categories'
import ActionButton from '../ActionButton'
import { useAddCat} from '../Categories/state/hooks'

const AddCategory = () => {
	const callAddCat = useAddCat();
	const categoryText = useRef();
	const addCatClicked = () => {
		callAddCat( categoryText.current.value );
		categoryText.current.value = ''
	}
	
	return (
		<div>
			<h3>Add Category</h3>
			<div style={{display:'flex'}}>
				<input ref={categoryText} type="text" />
				<ActionButton title='Add Category' handleClicked={addCatClicked} />
			</div>
		</div>
	)
}

export default AddCategory;
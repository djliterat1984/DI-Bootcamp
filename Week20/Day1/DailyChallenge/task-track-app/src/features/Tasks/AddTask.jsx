import React,{ useState, useRef } from 'react'
import Categories from '../Categories/Categories'
import ActionButton from '../ActionButton'
import { useAddTask } from './state/hooks'

const AddTask = () => {
	const callAddTask = useAddTask();
	const taskText = useRef();
	const [selectedCategory, setSelectedCategory] = useState('')
	const addTaskClicked = () => {
		callAddTask( { task: taskText.current.value, category: selectedCategory } );
	}
	
	const getSelectedCategory = (category, id) => {
		setSelectedCategory( category );
	}
	
	return (
		<div>
			<h3>Add task</h3>
			<div style={{display:'flex'}}>
				<input ref={taskText} type="text" />
				<Categories onSelectedOption={getSelectedCategory} />
				<ActionButton title='Add Task' handleClicked={addTaskClicked} />
			</div>
		</div>
	)
}

export default AddTask
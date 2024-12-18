import React from 'react'

export const EditTask = (props) => {
	const { handleEdit, item } = props;
	
	const showEditOptions = () => {	
		const isCompleted = prompt('Is the task completed?')
		const editText = prompt( `This is your task: ${ item.text }. Edit it:` )
		const completed = isCompleted.toLowerCase() === 'yes';
		const taskText = !editText ? item.text : editText;
		handleEdit( taskText, completed );
	}
	return (
		<div style={{margin:'10px'}}>
			<button onClick={() => showEditOptions()}>Edit</button>
		</div>
	)
}

import React, {useRef} from 'react'

const AddTask = ( { onAdd, onSelectDay } ) => {
	
	const taskName = useRef();
	const date = useRef();
	
	return (
		<>
			<input ref={date} type="date" onChange={() => onSelectDay(date.current.value) } />
			<input type='text' ref={ taskName } />
			<button onClick={() => onAdd(taskName.current.value, date.current.value)}>Add Task</button>
		</>
	)
}

export default AddTask;

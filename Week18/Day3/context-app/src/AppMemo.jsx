import React from 'react'
import { useState } from 'react'
import ToDo from './components/ToDo'

export const AppMemo = () => {
	
	const [ count, setCount ] = useState( 0 )
	const [ todos, setTodos ] = useState( [] )
	
	const addTask = () => {
		setTodos(todos => [...todos, 'new task'])
	}
	return (
		<>
			<h2>memo, useCallback, useMemo</h2>
			<div>
				<button onClick={ () => setCount( ( prev ) => prev + 1 ) }>Count: { count }</button>
				<button onClick={ () => addTask() }>Add task</button>
			</div>
			<ToDo tasks={todos} />
		</>
	)
}

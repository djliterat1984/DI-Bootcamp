import React from 'react'
import Categories from './Categories/Categories';
import AddTask from './Tasks/AddTask';
import AddCategory from './Categories/AddCategory';
import RemoveCategory from './Categories/RemoveCategory';
import EditCategory from './Categories/EditCategory';
import TaskItem from './Tasks/TaskItem';
import { useSelectCategory } from './Categories/state/hooks';

const Tasks = () => {
	const callSelectCategory = useSelectCategory()
	const callFilterTasksByCat = ( category ) => {
		callSelectCategory( category );
	}
	
	return (
		<div>
			<AddTask />
			<AddCategory />
			<RemoveCategory />
			<EditCategory />
			<h1>Tasks</h1>
			<Categories onSelectedOption={callFilterTasksByCat}  />
			<TaskItem />
		</div>
	)
}

export default Tasks
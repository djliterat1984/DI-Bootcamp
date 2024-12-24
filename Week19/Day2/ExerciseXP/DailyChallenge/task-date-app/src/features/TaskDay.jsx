import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { add, update, remove, updateDate } from '../features/state/taskDaySlice';
import AddTask from './AddTask';
import EditButton from './EditButton';
import RemoveButton from './RemoveButton';

const TaskDay = () => {
	
	const dispatch = useDispatch();
	const tasks = useSelector( state => state.appReducer.taskReducer.tasks );
	const selectedDate = useSelector( state => state.appReducer.taskReducer.selectedDate );	
	
	return (
		<>
			<h2>Tasks</h2>
			<AddTask
				onAdd={ ( task, day ) => dispatch( add( { task, day } ) ) }
				onSelectDay={ ( day ) => dispatch(updateDate(day))}
			  />
			{					
				tasks.map( ( item ) => {
					if(item.day === selectedDate)
						return (
							<div style={{display:'flex',justifyContent:'space-evenly'}} key={item.id}>
								<h3>{ item.day }</h3>
								<div style={ { display: 'flex', flexDirection: 'column' } }>
									{								
										item.taskList.map( taskItem => { 
										return (
											<div style={{display:'flex', flexDirection:'row'}} key={taskItem.id}>
												<h4 style={{marginLeft:'20px'}}>{ taskItem.task }</h4>
												<EditButton
													onUpdate={ ( task ) => dispatch( update( { day: item.day, task, id: taskItem.id } ) ) }
												/>
												<RemoveButton onRemove={() => dispatch(remove({day:item.day, id:taskItem.id}))} />
											</div>
										)
									} )
									}
									</div>
							</div>	
						)
			} )
			}
		</>
	)
}

export default TaskDay;
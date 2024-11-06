export class TodoList{

	// add tasks, mark tasks as complete, and list all tasks.
	tasks = []
	//tasksCompleted = false
	addTask = async(task) => {
		this.tasks.push( task )
	}
	
	updateTaskStatus = (taskId) => {
		let updatedTasks = this.tasks.map( (item,index) => {						
			if ( item.taskId == taskId )
				return { ...this.tasks[ index ], completed: true }
			
			return item
		} )
		
		this.tasks = updatedTasks
	}
	
	getAllTasks = () => this.tasks
}
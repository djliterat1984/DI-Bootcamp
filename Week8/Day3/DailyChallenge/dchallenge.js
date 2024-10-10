// Recreate the todo list above:

// 1.Create an HTML, CSS and a JS file.

// 2.In the HTML file
		// create a form with one input type="text", and a “Submit” button.
		// add an empty div below the form
		// 	<div class="listTasks"></div>

// 3.In the js file, you must add the following functionalities:
// 		1.Create an empty array : const tasks = [];

const tasks = [];
const tasks2 = [];

		// 2.Create a function called addTask(). As soon as the user clicks on the button:
					// check that the input is not empty,
					// then add it to the array (ie. add the text of the task)
					// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
					// Each new task added should have (starting from left to right - check out the image at the top of the page)
							// a “X” button. Use font awesome for the “X” button.
							// an input type="checkbox". The label of the input is the task added by the user.

document.getElementById( 'addBtn' ).addEventListener( 'click', ( event ) => {
	event.preventDefault();
	addTask()
} )

const addTask = () => {
	let taskTxt = document.getElementById( 'taskTxt' ).value
	
	if ( taskTxt != '' ) {
		tasks.push(taskTxt)
		addNewTaskToTasks(taskTxt)
		
		let task = createTaskText( taskTxt );
		let icon = createIcon()
		let checkboxInput = createCheckBox()
		
		let taskContainer = document.createElement( 'div' )
		taskContainer.style.cssText = `
			display: flex;
			flexDirection row;
			height: 30px;
			marginTop: 10px
		`;
		
		taskContainer.append( icon )
		taskContainer.append( checkboxInput )
		taskContainer.append( task )
		
		let tasksDiv = document.getElementsByClassName( 'listTasks' )[ 0 ];
		tasksDiv.append(taskContainer)
	} else {
		alert('Please fill task input')
	}
}

const createTaskText = (taskTxt) => {
	let task = document.createElement( 'h3' )
	task.textContent = taskTxt
	task.setAttribute( 'data-task-id', tasks2.length - 1 )
	
	return task;
}

const createIcon = () => {
	let icon = document.createElement( 'i' )
	icon.className = 'fa-solid fa-xmark'
	icon.style.color = 'white'
	icon.ariaHidden = false
	icon.textContent = 'X'
	
	return icon
}

const createCheckBox = () => {
	let checkboxInput = document.createElement( 'input' )
	checkboxInput.type = 'checkbox'
	checkboxInput.addEventListener( 'click', ( event ) => {	
		
		let divParent = checkboxInput.parentElement;
		let taskText = divParent.children[ 2 ]
		
		for ( let i = 0; i < tasks2.length; i++ ) {
			if ( tasks2[ i ].text === taskText.innerHTML )
				tasks2[ i ].done = checkboxInput.checked;
		}
	})
	return checkboxInput;
}

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false
// by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value 
// is the same as the task_id.Check out data -* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done 
// property should change from false to true in the object, and from black to crossed out red in the DOM.

const addNewTaskToTasks = (text) => {
	let	newTask = {
		'taskId': tasks2.length,
		'text': text,
		'done': false
	}
	tasks2.push( newTask )
}

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.
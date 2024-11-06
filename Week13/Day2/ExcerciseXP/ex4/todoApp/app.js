// Exercise 4: Todo List using ES6 module syntax
// Instructions
// Create a directory named todoApp.

// Inside the todoApp directory, create two files: todo.js and app.js.

// In todo.js, define an ES6 module that exports a TodoList class.

// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

// Export the TodoList class.

// In app.js, import the TodoList class from the todo.js module.

// Create an instance of the TodoList class.

// Add a few tasks, mark some as complete, and list all tasks.

// Run app.js and verify that the todo list operations are working correctly.

import { TodoList } from './todo.js';

const todoList = new TodoList();
todoList.addTask( {taskId: 1, task: 'Buy milk', completed: false } )
todoList.addTask( {taskId: 2, task: 'Call my wife', completed: false } )
todoList.addTask( {taskId: 3, task: 'Go to cinema', completed: false } )
todoList.addTask( { taskId: 4, task: 'Fullstack Course', completed: false } )

todoList.updateTaskStatus( todoList.tasks[ 1 ].taskId )
todoList.updateTaskStatus( todoList.tasks[ 2 ].taskId )

const tasks = todoList.getAllTasks()
console.log(tasks);




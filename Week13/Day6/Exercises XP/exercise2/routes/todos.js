const express = require( 'express' )

const routes = express.Router();

const todos = [
    {
        "id": 1,
        "todo": "delectus aut autem",
        "completed": false
    },
    {  
        "id": 2,
        "todo": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {  
        "id": 3,
        "todo": "fugiat veniam minus",
        "completed": false
    },
    {
        "id": 4,
        "todo": "et porro tempora",
        "completed": true
    },
    {  
        "id": 5,
        "todo": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {  
        "id": 6,
        "todo": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {  
        "id": 7,
        "todo": "illo expedita consequatur quia in",
        "completed": false
    },
    {  
        "id": 8,
        "todo": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {  
        "id": 9,
        "todo": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "id": 10,
        "todo": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
    {
        "id": 11,
        "todo": "vero rerum temporibus dolor",
        "completed": true
    },
    {
        "id": 12,
        "todo": "ipsa repellendus fugit nisi",
        "completed": true
    },
    {
        "id": 13,
        "todo": "et doloremque nulla",
        "completed": false
    },
    {
        "id": 14,
        "todo": "repellendus sunt dolores architecto voluptatum",
        "completed": true
    },
    {
        "id": 15,
        "todo": "ab voluptatum amet voluptas",
        "completed": true
    },
    {
        "id": 16,
        "todo": "accusamus eos facilis sint et aut voluptatem",
        "completed": true
    },
    {  
        "id": 17,
        "todo": "quo laboriosam deleniti aut qui",
        "completed": true
    },
    {
        "id": 18,
        "todo": "dolorum est consequatur ea mollitia in culpa",
        "completed": false
    },
    {
        "id": 19,
        "todo": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true
    }]

routes.get( '/todos', ( req, res ) => {
	res.send(todos)
} )

routes.post( '/todos', ( req, res ) => {
	const { todo } = req.body;
	const newItem = { id: todos.length, todo, completed:false };
	todos.push( newItem );
	res.sendStatus( 201 );
} )

routes.put( '/todos/:id', ( req, res ) => {
	const { id } = req.params
	const todoIndex = todos.findIndex( item => item.id === Number( id ) );
	if (todoIndex === -1) {
    return res.status(404).send("Task not found");
  }
  const updatedTodo = {
    id: todos[todoIndex].id,
		todo: req.body.todo,
		completed: req.body.completed
  };
  todos[todoIndex] = updatedTodo;
  res.status(200).json("Task updated");
} )

routes.delete( '/todos/:id', ( req, res ) => {
	const { id } = req.params
	const todoIndex = todos.findIndex( item => item.id === Number( id ) );
	if (todoIndex === -1) {
    return res.status(404).send("Task not found");
	}
	
	todos.splice( todoIndex, 1 );
	res.status( 200 ).json( 'Task deleted' );
} )

module.exports = routes


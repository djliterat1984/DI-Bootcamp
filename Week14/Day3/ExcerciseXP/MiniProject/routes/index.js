const express = require( 'express' );
const { validateData } = require( '../middleware/utils.js' )
const fs = require( 'fs' );
const path = require('path');

const taskRouter = express.Router();
const tasksPath = path.resolve( 'tasks.json' )
let tasks;

const readFile = async() => {
	fs.readFile(tasksPath,'utf8', ( err, data ) => {
		if ( err ) {
			console.log( err );
			return
		}

		tasks = JSON.parse(data);
	})
}

const writeFile = (path, data) => {
	fs.writeFile( path, data, ( err ) => {
		if ( err )
			console.log( err );
	} )
}

readFile()

taskRouter.get( '/', ( req, res ) => {
	res.send(tasks)
} )

taskRouter.get( '/:id', ( req, res ) => {
	console.log(tasks);
	try {
		const { id } = req.params;
		const task = tasks.find( item => item.id == Number(id));
		if ( !task ) {
			console.log(task);
			return res.status( 404 ).send( 'Task not found' );
		}
		
		res.status(200).json( task );
	} catch (error) {
		console.log(error);
	}
} )

taskRouter.post( '/', validateData, ( req, res ) => {
	try {
		const { todo, completed } = req.body;
		const newTask = {
			id: tasks.length + 1,
			todo,
			completed
		}
			
		tasks.push( newTask );
		writeFile(tasksPath, tasks)
		res.status( 201 ).send( 'Created' )
	} catch (error) {
		console.log( error );
	}
} )

taskRouter.put( '/:id', validateData,( req,res ) => {
	try {	
		const { id } = req.params;
		const taskIndex = tasks.findIndex( item => item.id === Number( id ) )
		if ( taskIndex == -1 )
			return res.status( 404 ).send( 'Task not found' )
		
		const { todo, completed } = req.body;
		tasks[ taskIndex ] = {
			id: tasks[ taskIndex ].id,
			todo,
			completed
		}
		res.status(200).send('Updated')
	} catch (error) {
		console.log(error);
	}
} )

taskRouter.delete( '/:id', ( req, res ) => {
	try {
		const { id } = req.params;
		const taskIndex = tasks.findIndex( item => item.id === Number( id ) )
		if ( taskIndex == -1 )
			return res.status( 404 ).send( 'Task not found' )
		
		tasks.splice( taskIndex, 1 );
		res.status( 200 ).send( 'Deleted' );
	} catch (error) {
		console.log(error);
	}
} )



module.exports = taskRouter
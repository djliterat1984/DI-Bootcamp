const express = require( 'express' );
const routes = express.Router();

const books = [];
routes.get( '/', ( req, res )=>{
	res.json(books)
} )

routes.post( '/', ( req, res ) => {
	try {
		const { title, price } = req.body;
		const newBook = {id: books.length + 1, title, price}
		books.push(newBook)
		res.send(books)
	} catch (error) {
		console.log(error);
	}
} )

routes.put( '/:id', ( req, res ) => {
	const { id } = req.params;
	const bookIndex = books.findIndex( item => item.id == Number( id ) )
	if ( bookIndex == -1 ) {
		return res.status( 404 ).send( 'Book not found' );
	}
	
	const { title, price } = req.body;
	const updatedBook = {
		id: books[bookIndex].id,
		title,
		price
	}
	
	books[ bookIndex ] = updatedBook;
	res.status(200).send('Book updated')
} )

routes.delete( '/:id', ( req, res )=>{
	const { id } = req.params;
	const bookIndex = books.findIndex( item => item.id == Number( id ) )
	if ( bookIndex == -1 ) {
		return res.status( 404 ).send( 'Book not found' );
	}
	
	books.splice( bookIndex, 1 );
	res.status(200).send('Deleted')
} )







module.exports = routes
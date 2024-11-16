const express = require( 'express' );
const {
	getAllBooks,
	getBookById,
	createNewBook,
} = require( '../controllers/bookController.js' );


const bookRouter = express.Router();

bookRouter.get( '/', getAllBooks );

bookRouter.get( '/:id', getBookById );

bookRouter.post( '/', createNewBook );

module.exports = bookRouter
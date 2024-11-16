const {getAllBooksDb, getBookByIdDb, createNewBookDb } = require('../models/booksData.js')

const getAllBooks = async( req, res ) => {
	try {
		const data = await getAllBooksDb();
		res.json( data );	
	} catch (error) {
		console.log(error);
		res.status(500).json({message:'something went wrong'})
	}
}

const getBookById = async( req, res ) => {
	try {
		const { id } = req.params;
		const data = await getBookByIdDb( id );
		if ( !data )
			return res.status( 404 ).json( 'Post not found' )
		
		console.log( data );
		res.json(data)
	} catch (error) {
		console.log(error);
		res.status(500).json({message:'something went wrong'})
	}
}

const createNewBook = async ( req, res ) => {
	try {
		const { title, author, publishedyear } = req.body;
		const result = await createNewBookDb( title, author, publishedyear );
		if(result.length == 0)
			return res.status( 400 ).json( "An error has occurred" )
		
		res.status( 201 ).json( {id:result[0].id, message:'Book Created'} );
	} catch (error) {
		console.log(error);
		res.status(500).json({message:'something went wrong'})
	}
}

module.exports = {
	getAllBooks,
	getBookById,
	createNewBook,
}
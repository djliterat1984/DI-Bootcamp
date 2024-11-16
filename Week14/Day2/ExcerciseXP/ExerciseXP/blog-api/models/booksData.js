const { blogApiDb } = require( '../config/blogApiDb.js' );

const getAllBooksDb = () => {
	return blogApiDb( 'books' ).select( 'id', 'title', 'author', 'publishedyear');
}

const getBookByIdDb = (id) => {
	return blogApiDb( 'books' ).select('id', 'title', 'author', 'publishedyear').where({id});
}

const createNewBookDb = (title, author, publishedYear) => {
	return blogApiDb( 'books' ).insert( { title, author, publishedyear:publishedYear } ).returning('id')
}

module.exports = {
	getAllBooksDb,
	getBookByIdDb,
	createNewBookDb,
}
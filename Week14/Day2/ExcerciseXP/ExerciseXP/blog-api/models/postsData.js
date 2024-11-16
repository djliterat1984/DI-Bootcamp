const { blogApiDb } = require( '../config/blogApiDb.js' );

const getAllPostsDb = () => {
	return blogApiDb( 'posts' ).select( "id","title","content");
}

const getPostByIdDb = (id) => {
	return blogApiDb( 'posts' ).select( "id","title","content").where({id});
}

const createNewPostDb = (title, content) => {
	return blogApiDb( 'posts' ).insert( { title, content } ).returning('id')
}

const updatePostDb = ( id, title, content ) => {
	return blogApiDb( 'posts' ).where( 'id', id ).update( {
		title: title,
		content: content
	},['id','title','content'])
}

const deletePostDb = ( id ) => {
	return blogApiDb( 'posts' ).where( 'id', id ).del(['id']);
}

module.exports = {
	getAllPostsDb,
	getPostByIdDb,
	createNewPostDb,
	updatePostDb,
	deletePostDb,
}
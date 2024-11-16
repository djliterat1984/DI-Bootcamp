const {getAllPostsDb, getPostByIdDb, createNewPostDb ,updatePostDb, deletePostDb} = require('../models/postsData.js')

const getAllPosts = async( req, res ) => {
	try {
		const data = await getAllPostsDb();
		res.json( data );	
	} catch (error) {
		console.log(error);
		res.status(500).json({message:'something went wrong'})
	}
}

const getPostById = async( req, res ) => {
	try {
		const { id } = req.params;
		const data = await getPostByIdDb( id );
		if ( !data )
			return res.status( 404 ).json( 'Post not found' )
		
		console.log( data );
		res.json(data)
	} catch (error) {
		console.log(error);
		res.status(500).json({message:'something went wrong'})
	}
}

const createNewPost = async ( req, res ) => {
	try {
		const { title, content } = req.body;
		const result = await createNewPostDb( title, content );
		if(result.length == 0)
			return res.status( 400 ).json( "An error has occurred" )
		
		res.status( 201 ).json( {id:result[0].id, message:'Post Created'} );
	} catch (error) {
		console.log(error);
		res.status(500).json({message:'something went wrong'})
	}
}

const updatePost = async ( req, res ) => {
	try {
		const { id } = req.params;
		const { title, content } = req.body;
		const result = await updatePostDb( id, title, content );
		if ( result.length == 0 )
			return res.status( 400 ).json( "An error has occurred" )
		
		res.status( 200 ).json( 'Updated' );
	} catch (error) {
		console.log(error);
		res.status(500).json({message:'something went wrong'})
	}
}

const deletePost = async ( req, res ) => {
	try {
		const { id } = req.params;
		const result = await deletePostDb( id );
		if ( result.length == 0 )
			return res.status( 400 ).json( "An error has occurred" )
		
		res.status( 200 ).json( 'Deleted' );
	} catch (error) {
		console.log(error);
		res.status(500).json({message:'something went wrong'})
	}
}

module.exports = {
	getAllPosts,
	getPostById,
	createNewPost,
	updatePost,
	deletePost
}
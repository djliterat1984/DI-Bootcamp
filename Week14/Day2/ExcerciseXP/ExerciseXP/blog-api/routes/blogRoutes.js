const express = require( 'express' );
const {
	getAllPosts,
	getPostById,
	createNewPost,
	updatePost,
	deletePost
} = require( '../controllers/postController.js' );


const blogRouter = express.Router();

blogRouter.get( '/', getAllPosts );

blogRouter.get( '/:id', getPostById );

blogRouter.post( '/', createNewPost );

blogRouter.put( '/:id', updatePost );

blogRouter.delete( '/:id', deletePost)

module.exports = blogRouter

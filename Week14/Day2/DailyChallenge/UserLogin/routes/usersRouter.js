const express = require( 'express' );
 const { getAllUsers, getUserById, updateUser } = require( '../controllers/userController.js' );


const usersRoute = express.Router();

usersRoute.get( '/', getAllUsers );
usersRoute.get( '/:id', getUserById );
usersRoute.put( '/:id', updateUser );

module.exports = usersRoute;
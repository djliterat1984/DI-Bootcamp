const express = require( 'express' );
const {register, login} = require('../controllers/loginController.js')
 
const loginRoute = express.Router();

loginRoute.post( '/register', register );
loginRoute.post( '/login', login );

module.exports = loginRoute;

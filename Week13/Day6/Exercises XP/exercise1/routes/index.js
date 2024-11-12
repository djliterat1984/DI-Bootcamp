const express = require( 'express' )

const routes = express.Router();

routes.get( '/', ( req, res ) => {
	res.send("Homepage")
} )

routes.get( '/about', ( req, res ) => {
	res.send("Aboutpage")
} )

module.exports = routes
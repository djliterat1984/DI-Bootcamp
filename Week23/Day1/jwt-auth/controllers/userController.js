const userModel = require( '../models/userModel.js' );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );
require( 'dotenv' ).config();

module.exports = {
	registerUser: async ( req, res ) => {
		const { password, email } = req.body;
		
		try {
			const user = await userModel.createUser( password, email );
			res.status( 201 ).json( {
				message: 'User create succefully',
				user: {
					email: user.email,
					id:user.id
				}
			} )
		} catch (error) {
			console.log( 'error', error );
			res.status( 500 ).json( {
				message: "Internal server error"
			} )
			throw error;
		}
	},
	loginUser: async (req,res) => {
		const { password, email } = req.body;
		try {
			const user = await userModel.getUserByEmail( email );
			if ( !user ){
				res.status( 404 ).json( { message: 'User not found' } );
				return;
			}
			
			const passwordMatch = await bcrypt.compare( password + "", user.password );
			if ( !passwordMatch ) {
				res.status( 404 ).json( { message: 'Wrong Password' } );
				return;
			}
			
			//generate the token
			const { ACCESS_TOKEN_SECRET } = process.env;
			const accessToken = jwt.sign(
				{ userId: user.id, email: user.email },
				ACCESS_TOKEN_SECRET,
				{ expiresIn: '60s' }
			);
			
			res.cookie( 'token', accessToken, {
				httpOnly: true,
				maxAge: 60 * 1000,
				secure:true
			} )
			
			res.status( 200 ).json( {
				message: 'Login succesfully',
				user: { userId: user.id, email: user.email },
				token: accessToken
			} )
			
		} catch (error) {
			console.log( error );
			res.status( 500 ).json( {
				message: "Internal server error"
			} )
		}
	},
	getAllUsers: async (req,res) => {
		try {
			const users = await userModel.getUsers();
			res.json(users)
		} catch (error) {
			console.log( error );
			res.status( 500 ).json( {
				message: "Internal server error"
			} )
		}
	},
	logoutuser: ( req, res ) => {
		res.clearCookies( 'token' );
		req.cookies( 'token' ) = null;
		delete req.cookies[ 'token' ];
		// set the column token to null
		res.sendStatus( 200 );
	},
	verifyAuth: ( req, res ) => {
		const { userId, email } = req.user;
		const { ACCESS_TOKEN_SECRET } = process.env;
		
		const newAccessToken = jwt.sign(
			{userId, email}, ACCESS_TOKEN_SECRET, {expiresIn: '60s'},
		)

		res.cookie( 'token', newAccessToken,{
			httpOnly: true,
			maxAge: 60 * 1000,
			secure: true
		} )	
	}
}

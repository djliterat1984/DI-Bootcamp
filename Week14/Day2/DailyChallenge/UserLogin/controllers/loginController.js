const { registerNewUserDB, loginDB } = require( '../models/loginData.js' )
const bcrypt = require( 'bcrypt' );

const register = async ( req, res ) => {
	try {
		const {username, password} = req.body;
		const data = await registerNewUserDB( username, password );
		res.json( data );	
	} catch (error) {
		console.log(error);
		res.status(500).json({message:'something went wrong'})
	}
}

const login = async ( req, res ) => {
	try {
		const {username, password} = req.body;
		const data = await loginDB( username, password );
		bcrypt.compare( password, data[ 0 ].password, ( error, result ) => {
			if ( error ){
				throw error;
			};
			console.log(result);
			
			res.json(result);
		})
	} catch (error) {
		console.log(error);
		res.status(500).json({message:'something went wrong'})
	}
}

module.exports = {
	register,
	login
}



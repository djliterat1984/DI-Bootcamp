const { registerNewUserDB, loginDB,registerUserDB } = require( '../models/loginData.js' )
const bcrypt = require( 'bcrypt' );
const { log } = require( 'node:console' );
const fs = require( 'node:fs' )
require( "dotenv" ).config()

const { USERS_JSON_PATH } = process.env;
 
const addNewUserToFile = ( firstname, lastname, email, username, password ) => {
	fs.readFile( `${USERS_JSON_PATH}`, 'utf8', function ( error, data ){
		if ( error ) {
			console.log( error );
			return;
		}
		
		const objFile = JSON.parse( data );
		objFile.push( { firstname, lastname, email, username, password } );
		fs.writeFile( `${USERS_JSON_PATH}`, JSON.stringify( objFile ), function ( error ) {
			if ( error ) {
				console.log(error);
				return
			}
		} )
	} );
}

const register = async ( req, res ) => {
	try {
		const {firstname, lastname, email, username, password} = req.body;
		const data = await registerNewUserDB( username, password );
		if ( typeof ( data ) == 'string' ) {
			throw new Error(data)
		}
		else {
			const id = Number( data[ 0 ].id )
			const userData = await registerUserDB( firstname, lastname, email, id )
			addNewUserToFile(firstname, lastname, email, username, password)
			res.json( userData );	
		}
	} catch (error) {
		console.log(error);
		res.status(404).json({errorMessage:error.message})
	}
	
	register.reset();
}

const login = async ( req, res ) => {
	try {		
		const {username, password} = req.body;
		const data = await loginDB( username, password );
		if ( data.length == 0 ){
			res.status(401).json({errorMessage:'Username is not registered'})
			return
		}
		
		bcrypt.compare( password, data[ 0 ].password, ( error, result ) => {
			if ( error ) {
				console.log('========>',error);
				throw error;
			};
			console.log('result',result);			
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



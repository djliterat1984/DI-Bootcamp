const { loginApiDb } = require( '../config/loginDb.js' );
const bcrypt = require( 'bcrypt' );
const saltRounds = 10;

const registerNewUserDB = async ( username, pass ) => {
	const salt = bcrypt.genSaltSync( saltRounds );
	const trx = await loginApiDb.transaction()
	try {
		const result = await trx('hashpwd').insert( { username, password: bcrypt.hashSync( pass, salt ) }, 'id' )
		await trx.commit()
		return result;
	} catch ( error ) {
		await trx.rollback()
		console.log( error );
		throw error
	}
}

const loginDB = async ( username, pass ) => {
	try {
		return loginApiDb( 'hashpwd' ).select( 'username', 'password' ).where( { username } );
	} catch (error) {
		console.log(error);
		
	}
	
	
	// const salt = bcrypt.genSaltSync( saltRounds );
	// const trx = await loginApiDb.transaction()
	// try {

	// 	const result = ( await trx( 'users' ).where( { username } ) ).select( [ 'username', 'password' ] )
	// 	console.log(result);
		
		// await trx.commit()
		// return result;
	// } catch ( error ) {
	// 	await trx.rollback()
	// 	console.log( error );
	// 	throw error
	// }
}

module.exports = {
	registerNewUserDB,
	loginDB,
}
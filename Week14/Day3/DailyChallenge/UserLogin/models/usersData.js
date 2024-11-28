const { loginApiDb } = require( '../config/loginDb.js' );

const getAllUsersDB = () => {
	return loginApiDb( 'users' ).select( 'id', 'firstname', 'lastname', 'email')
}

const getUserByIdDB = ( id ) => {
	return loginApiDb( 'users' )
		.select( 'id', 'firstname', 'lastname', 'email' )
		.where( {id} )
}

const updateUserDB = ( id, firstname, lastname, email ) => {
	return loginApiDb('users').where({id}).update({firstname,lastname,email})
}

module.exports = {
	getAllUsersDB,
	getUserByIdDB,
	updateUserDB,
}
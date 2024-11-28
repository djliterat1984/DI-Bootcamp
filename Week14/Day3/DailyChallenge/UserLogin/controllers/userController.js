const { getAllUsersDB, getUserByIdDB, updateUserDB} = require( '../models/usersData.js' )

const getAllUsers = async ( req, res ) => {
	try {
		const data = await getAllUsersDB();
		res.json(data)	
	} catch (error) {
		console.log(error);
	}
	
}
const getUserById = async ( req, res ) => {
	try {
		const id  = Number(req.params.id);
		const data = await getUserByIdDB( id )
		res.json(data)
	} catch (error) {
		console.log(error);
	}
}
const updateUser = async ( req, res ) => {
	try {
		const id  = Number(req.params.id);
		const {firstname, lastname} = getUserByIdDB(id)
		const { email } = req.body;
		const result = await updateUserDB( id, firstname, lastname, email );
		res.json( result );
	} catch (error) {
		console.log(error);
	}
} 

module.exports = {
	getAllUsers,
	getUserById,
	updateUser
}
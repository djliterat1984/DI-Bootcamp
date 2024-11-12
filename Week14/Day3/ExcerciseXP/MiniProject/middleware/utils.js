const validateData = ( req, res, next ) => {
	try {
		const { todo, completed } = req.body;
		if ( todo == null || todo.length == 0 || completed == null || completed.length == 0 )
			return res.status( 401 ).json( 'There is one or more errors on the details' )
		
		next()
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	validateData
}
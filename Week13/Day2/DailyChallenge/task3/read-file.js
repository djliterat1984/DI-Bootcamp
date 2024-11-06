const fs = require( 'fs' );

const readFile = (path) => {
	fs.readFile( path, 'utf-8', function ( err, data ) {
		if ( err ){
			console.log( err )
			return
		}
		console.log(data);	
	} )
}

module.exports = {
	readFile,
}
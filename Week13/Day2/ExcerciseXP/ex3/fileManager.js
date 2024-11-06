const { log } = require( 'console' );
const fs = require( 'fs' )

const readFile = (file) => {
	fs.readFile( file, 'utf-8', function ( err, data ) {
		if ( err ) {
			console.log( err );
			return err.message
		}
		console.log( data );
	} )
}
const writeFile = (file,content) => {
	fs.writeFile( file, content, function ( err ) {
		if ( err )
			console.log(err.message);
	} )
}

module.exports = {readFile,writeFile}
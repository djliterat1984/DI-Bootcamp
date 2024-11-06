// In copy-file.js, use the fs module to read the content from a file named source.txt and then 
// write the same content to a new file named destination.txt.

const fs = require( 'fs' )

const writeToDestinationFile = async( data ) => await fs.writeFile( './destination.txt', data, function ( err ) {
	if ( err ){
		console.log( err );
		return
	}
} )

const readSourceFile = async() => await fs.readFile( 'source.txt', 'utf-8', function( err, data ) {
	if ( err ){
		console.log(err);
		return
	}
	
	console.log(data);
	writeToDestinationFile(data)
} )

readSourceFile();
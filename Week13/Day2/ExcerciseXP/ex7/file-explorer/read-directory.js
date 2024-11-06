// Create another file named read-directory.js.

// In read-directory.js, use the fs module to read the list of files in a specified 
// directory and display their names in the terminal.

const fs = require( 'fs' )
const printDirectories = (dirs) => {
	dirs.forEach(item => console.log(item))
}
const readDirectories = ( path ) => {
	const dirs = fs.readdirSync( path )
	printDirectories(dirs)
}

readDirectories('../file-explorer')

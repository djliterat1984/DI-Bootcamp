// Task 3: Advanced File Operations

// 1.Inside the daily-challenge directory, create a directory named files.

// 2.Inside the files directory, create a file named file-data.txt and add some text content to it.

// 3.Create a file named read-file.js.

// 4.In read-file.js, require the fs module and read the content from the file-data.txt file. 
// Display the content in the terminal.

// 5.Create another file named app.js.

// 6.In app.js, require the read-file.js module and call the function you’ve written to display the file’s content.

// 7.Run app.js using Node.js and see the content of the file.

const {readFile} = require('./read-file.js')

readFile('./files/file-data.txt')






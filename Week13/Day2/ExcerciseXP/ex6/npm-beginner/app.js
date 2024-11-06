// Exercise 6: Simple NPM Package Usage
// Instructions
// Create a directory named npm-beginner.

import chalk from 'chalk'

// Inside the npm-beginner directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the chalk package, which provides easy coloring for terminal output, by running npm install chalk in the terminal.

// Create a file named app.js inside the npm-beginner directory.

// In app.js, require the chalk package and use it to color and style text in the terminal.

// Write a simple script that uses chalk to print a colorful message.

// Run app.js using Node.js and observe the colorful output in the terminal.


const printMessage = ( text ) => {
	let sentence = ''
	for (let i = 0; i < text.length; i++) {
		if ( i % 2 == 0 ) {
			sentence += chalk.blue(text[i])
		}
		else {
			sentence += chalk.red(text[i])
		}
	}
	console.log(sentence);
}

printMessage('This is the exercise 6 from modules topic')
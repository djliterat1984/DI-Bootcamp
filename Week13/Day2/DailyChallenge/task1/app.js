// Create a directory named daily-challenge.

// Task 1: Basic Module System

// 1.Inside the daily-challenge directory, create a file named greeting.js.

// 2.In greeting.js, define a function called greet that takes a name as a parameter and returns a 
// personalized greeting message.

// 3.Export the greet function using the Node.js module system.

// 4.Create another file named app.js in the same directory.

// 5.In app.js, require the greeting.js module and use the greet function to greet a user.

// 6.Run app.js using Node.js and see the greeting message.

const { greet } = require( './greeting.js' );

greet( 'Diego' )


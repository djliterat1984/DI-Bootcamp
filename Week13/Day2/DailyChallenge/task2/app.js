// Task 2: Using an NPM Module

// 1.Inside the daily-challenge directory, open a terminal and run npm init to initialize 
//   a new Node.js project. Follow the prompts to set up your project.
// 2.Install the chalk package by running npm install chalk in the terminal.
// 3.Create a file named colorful-message.js.
// 4.In colorful-message.js, require the chalk package and use it to create and display a 
//   colorful message in the terminal.
// 5.Create another file named app.js.
// 6.In app.js, require the colorful-message.js module and call the function you’ve written 
//   to display the colorful message.
// 7.Run app.js using Node.js and see the colorful message.

import { greetColor } from './colorful-message.js';

console.log(greetColor());




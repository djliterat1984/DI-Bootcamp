// const greeting = require("./greeting.js");

// const name = "Mike Taylor";

// greeting(name);

// const person = require( './person.js' )
// console.log(person.car, person.name);

// 1. Create a file named math.js.

// 2. Inside math.js, define a function called add that takes two parameters and returns their sum.

// 3. Export the add function using the CommonJS syntax.

// 4. Create another file named app.js.

// 5. In app.js, import the add function from the math.js module.

// 6. Use the add function to calculate and print the sum of two numbers.

// 7. Run app.js and see if the sum is calculated correctly.


//const add = require( './math' )
import { add } from './math.js';

const sum1 = add( 3, 5 )
console.log(sum1);


// Exercise 2: Advanced Module Usage using ES6 module syntax
// Instructions
// 1.Create a file named data.js.

// 2.Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

// 3.Export the array using the ES6 module syntax.

// 4.Create another file named app.js.

// 5.In app.js, import the array of person objects from the data.js module.

// 6.Write a function that calculates and prints the average age of all the persons in the array.

// 7.Use the imported array and the average age function in app.js.

// 8.Run app.js and confirm that the average age is correctly calculated and displayed.

import { personList } from './data.js';

const getAverage = () => {
	let totalAge = personList.reduce( ( a, b ) => a + b.age, 0 )
	const average = totalAge / personList.length
	return average;
}

const average = getAverage();
let sentence = ''
personList.forEach( item => sentence += `${ item.name } is ${ item.age } years old, ` )
console.log(`${sentence}the average age is ${average}`);






//  Exercise 1 : List of people
// Instructions
const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review about arrays
// 1.Write code to remove “Greg” from the people array.

let index = people.indexOf('Greg')
people.splice( index, 1 )
console.log(people);

// 2.Write code to replace “James” to “Jason”.

index = people.indexOf('James')
people[index] = 'Jason'
console.log(people);

// 3.Write code to add your name to the end of the people array.

people.push( 'Diego' )
console.log(people);

// 4.Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

index = people.indexOf( 'Mary' )
console.log(index);


// 5.Write code to make a copy of the people array using the slice method.
// 		- The copy should NOT include “Mary” or your name.
// 		-	Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// 		-	Hint: Check out the documentation for the slice method

console.log(people.slice(1,3));
 
// 6.Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf('Foo')) // because it value doesn't exist in the array 

// 7.Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let last = people[ people.length - 1 ]
console.log(last);

// Part II - Loops
// 1.Using a loop, iterate through the people array and console.log each person.

people.forEach(element => console.log(element));

// 2.Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

for (let i = 0; index < people.length; i++) {
	let element = people[ i ] 
	if ( element === 'Devon' )
		break;
	console.log(element)
}

// 🌟 Exercise 2 : Your favorite colors
// Instructions
// 1.Create an array called colors where the value is a list of your five favorite colors.
let colors = ['blue', 'red', 'green', 'violet', 'sky']

// 2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, 
// 	“My #2 choice is red” ect… .

for (let i = 0; i < colors.length; i++) {
	const color = colors[ i ];
	console.log(`My #${i+1} choice is ${color}`);
}

// 3.Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct 
// 		suffix for each number.
// 	 Hint : create an array of suffixes to do the Bonus

for (let i = 0; i < colors.length; i++) {
	const color = colors[ i ];
	switch (i) {
		case 0:
			console.log(`My ${i+1}st choice is ${color}`);		
			break;
		case 1:
			console.log(`My ${i+1}nd choice is ${color}`);		
			break;
		case 2:
			console.log(`My ${i+1}rd choice is ${color}`);		
			break;
		case 3:
			console.log(`My ${i+1}th choice is ${color}`);		
			break;
		case 4:
			console.log(`My ${i+1}th choice is ${color}`);		
			break;
		default:
			break;
	}
}

// 🌟 Exercise 3 : Repeat the question
// Instructions
// 1.Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// let num = prompt('Give a number: ', '0')
// console.log(typeof(num));

// 2.While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// let num2
// do {
// 	num2 = Number(prompt('Give a number: ', '0'))
// } while (num2 < 10);

// 🌟 Exercise 4 : Building Management
// Instructions:



// Review about objects
// 1.Copy and paste the above object to your Javascript file.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 2.Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// 3.Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);

// 4.Console.log the name of the second tenant and the number of rooms he has in his apartment.

let sndTenant = building.nameOfTenants[ 1 ] 
console.log( 'tenant', sndTenant );
for (let i in building.numberOfRoomsAndRent) {
	if(i.toLowerCase() === sndTenant.toLowerCase())
		console.log('number of rooms', building.numberOfRoomsAndRent[i][0] );	
}

// 5.Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, 
// than increase Dan’s rent to 1200.

let sarahAndDavidRent = 0
let danRent = 0
for (let i in building.numberOfRoomsAndRent) {
	if(i.toLowerCase() === 'dan')
		danRent = building.numberOfRoomsAndRent[ i ][ 1 ];
	else
		sarahAndDavidRent += building.numberOfRoomsAndRent[ i ][ 1 ];
}

if ( sarahAndDavidRent > danRent )
{
	console.log( danRent );
	danRent += 1200
	console.log( danRent );
}
else
	console.log('Perfect');
	

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.

const family = {
	children: 6,
	lastName: 'Almoni',
	fatherName: 'Abraham',
	matherName: 'Sara'
}

for (let i in family) {
	const element = family[i];
	console.log( i, element)
}

// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

let sentence = ''
const space = ' '
for (let i in details) {
	sentence += i + space + details[i] + space
}

console.log(sentence);



// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the 
// first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

names.sort()
let secretSociety = ''

names.forEach(element => {
	secretSociety += element[0]
} );

console.log(secretSociety);



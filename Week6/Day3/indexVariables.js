// Create a structured HTML file linked to a JS file

// 1. Create these variables and give them values:

// addressNumber
// addressStreet
// country

let addressNumber = 708
let addressStreet = 'Larrea'
let country = 'Argentina'

// 2. Write a variable named globalAddress, and concatenate inside, the variables:

// addressNumber
// addressStreet
// country

let globalAddress = addressNumber + ' ' + addressStreet + ' ' + country
// In order to create a sentence
// 3. Display globalAddress Example: globalAddress should display « I live in BenYehuda 5, in Israel »
console.log('I live in ' + globalAddress)


// 1. Store your birth year in a variable.

let birthYear = 1984
// 2. Store a future year in a variable.

let futureYear = 2030

// 3. Calculate your possible ages for that year based on the stored values.

age = futureYear - birthYear

// 4. Display : "I will be NN in YYYY", substituting the values.

let textToDisplay = 'I will be ' + age + ' in ' + futureYear
console.log(textToDisplay);


// 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']

let pets = ['cat','dog','fish','rabbit','cow']

// 2. Display dog

console.log( pets[ 1 ] )

	// 3. Add to the array pets, the pet horse. Remove the pet rabbit

let petsDeleted =	pets.splice(3,1,'horse');

// 4. Display the array length

print( pets.length )

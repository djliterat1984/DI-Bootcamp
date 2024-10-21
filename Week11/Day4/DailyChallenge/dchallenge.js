// Instructions
// 1st daily challenge
// 1.Create two functions. Each function should return a promise.
// 2.The first function called makeAllCaps(), takes an array of words as an argument
// 			- If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// 			- else, reject the promise with a reason.

const makeAllCaps = ( words ) => new Promise( ( resolve, reject ) => {
	const valuesNotString = words.filter( value => typeof ( value ) !== 'string' )
	if ( valuesNotString.length == 0 )
		resolve(words.map( value => value.toUpperCase() ))
	else
		reject('The array has one or more non-string values')
} )

// 3.The second function called sortWords(), takes an array of words uppercased as an argument
// 			- If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// 			- else, reject the promise with a reason.

const sortWords = ( wordsUppercased ) => new Promise( ( resolve, reject ) => {
	if ( wordsUppercased.length > 4 )
		resolve( wordsUppercased.sort())
	else
		reject( 'The array is less or equal than 4.' )
} )

// Test:

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


// 2nd daily challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
// 1.Create three functions. The two first functions should return a promise.

// 2.The first function is named toJs():
// 		- this function converts the morse json string provided above to a morse javascript object.
// 		- if the morse javascript object is empty, throw an error (use reject)
// 		- else return the morse javascript object (use resolve)

const toJs = () => new Promise( ( resolve, reject ) => {
	if ( morse.length == 0 )
		reject('The JSON string is empty')
	else
		resolve(JSON.parse(morse))
} )

// 3.The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// 		- This function asks the user for a word or a sentence.
// 		- if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// 		- else return an array with the morse translation of the user’s word.
// 		if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// 		if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

const toMorse = ( morseJS ) => new Promise( ( resolve, reject ) => {
	const inputUser = prompt( 'Give me a word or a sentence:' );
	const morseArray = inputUser.split( '' );
	let invalidValues = [];
	let morseTranslation = []
	morseArray.forEach( value => {
		const morseValue = morseJS[ value.toLowerCase() ]
		if ( value === ' ' ) {
			morseTranslation.push(value)
		}
		else if ( morseValue === undefined ) {
			invalidValues.push(value)
		}
		else
			morseTranslation.push(morseValue)
	} )		

	if ( invalidValues.length > 0 )
		reject( invalidValues )
	else
		resolve(morseTranslation)
} )


// 4.The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

const joinWords = ( morseTranslation ) => {
	try {
		morseTranslation.forEach( value => {
			let paragraph = document.createElement( 'p' )
			paragraph.style.fontSize = '25px'
			paragraph.style.padding = 0
			paragraph.style.margin = 0
			paragraph.textContent = value
			document.body.append( paragraph )
		})
	} catch (error) {
		alert(error);
	}
} 

// 5.Chain the three functions.

const morseObj = toJs( morse )
	.then( result1 => toMorse( result1 )
		.then( result2 => joinWords( result2 ) )
		.catch( error => {
			error.forEach( value => {
				console.log( `the promise rejects because the character ${ value } doesn't exist in the morse javascript object` )
			} )
		alert('An error ocurred, please open the console to check it')
		})
		.catch( error => {
			console.log( error )
			alert('An error ocurred, please open the console to check it')
		} )
)

// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---

// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// 1.Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// 2.Make sure the values are not empty
// 3.Write a story that uses each of the values.
// 4.Make sure you check the console for errors when playing the game.
// 5.Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change 
// the story currently displayed( but keep the values entered by the user ).
// The user could click the button at least three times and get a new story.Display the stories randomly.

const isWhitespaceString = str => !str.replace(/\s/g, '').length

document.getElementById( 'lib-button' ).addEventListener( 'click', (event) => {
	event.preventDefault()
	const {noun,adjective,verb,name, place} = getValues()
	console.log(noun);
	
	const span = document.getElementById( 'story' )	
	if (hasEmptyInput(noun,verb,adjective,name,place))
		span.textContent = 'One or more inputs are empties'
	else
		span.textContent = `${name} ${adjective} ${verb} a vibrant ${noun} in the ${place}.`	
} )

document.getElementById( 'shuffleBtn' ).addEventListener( 'click', ( event ) => {
	event.preventDefault()
	const {noun,adjective,verb,name, place} = getValues()
	
	const span = document.getElementById( 'story' )	
	if (hasEmptyInput(noun,verb,adjective,name,place))
		span.textContent = 'One or more inputs are empties'
	else {
		const randomNumber = Math.floor(Math.random() * 4) + 1;
		if(randomNumber === 1)
			span.textContent = `${ name } ${ adjective } ${ verb } a ${ noun } in the ${ place }.`
		else if(randomNumber === 2)
			span.textContent = `${ name } ${ verb } the ${ adjective } ${ noun } on the ${ place }.`
		else if(randomNumber === 3)
			span.textContent = `${ name } ${ adjective } ${ verb } a ${ noun } in the ${ place } of the library.`
		else
			span.textContent = `${ name } ${ verb } along the ${ place }, admiring the ${ adjective } ${ noun }.`
	}
} )

const hasEmptyInput = (noun, verb,adjective,name,place) => 
	isWhitespaceString( noun ) == isWhitespaceString( verb ) == isWhitespaceString( adjective ) == isWhitespaceString( name ) == isWhitespaceString( place ) == true

const getValues = () => {
	const noun = document.getElementById( 'noun' ).value;
	const verb = document.getElementById( 'verb' ).value;
	const adjective = document.getElementById( 'adjective' ).value;
	const name = document.getElementById( 'person' ).value;
	const place = document.getElementById( 'place' ).value;
	
	return {noun, verb,adjective,name,place}
}


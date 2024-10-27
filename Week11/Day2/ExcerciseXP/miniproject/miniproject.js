// What you will learn
// Conditionals, and ternary operator
// Loops
// Arrow Functions
// Array methods
// Objects


// What you will create
// Create a Random Quote Generator game in Javascript.

// random quote generator
// Instructions
// Part 1 : Quote generator
// 1.Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// 2.In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. 
// The id must start at 0, and is incremented for every new quote.So the first quote will have the id 0, 
// the second quote the id 1, the third quote the id 2 ect…

// 3.Populate the array with a few quotes that you like.

// 4.When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display 
// it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.

let quotes = [
	{ id: '0', author: 'Oscar Wilde', quote: 'Be yourself; everyone else is already taken.',likes:0 },
	{ id: '1', author: 'Albert Einstein', quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',likes:0 },
	{ id: '2', author: 'Frank Zappa', quote: 'So many books, so little time.',likes:0 } ]

let lastQuoteId = 0

const setRandomQuote = () => {
	let quoteNumber = Math.floor( Math.random() * 3 )
	
	while ( lastQuoteId === quoteNumber )
		quoteNumber = Math.floor(Math.random() * 3)
	
	lastQuoteId = quoteNumber
	
	const quoteElement = document.getElementById( 'quote' )
	quoteElement.textContent = quotes[ quoteNumber ].quote
	
	const authorElement = document.getElementById( 'author' )
	authorElement.textContent = quotes[quoteNumber].author
}

const addQuote = ( event ) => {
	event.preventDefault()
	const quote = document.getElementById( 'quoteInput' ).value;
	const author = document.getElementById( 'authorInput' ).value;
	const id = quotes.length
	
	quotes.push( { id, author, quote,likes: 0 } )
	console.log(quotes);
}

const getNumberOfCharactersWithWhiteSpaces = () => {
	const quoteCharachters = quotes[ lastQuoteId ].quote.split('').length
	console.log(quoteCharachters);
}

const getNumberOfCharactersWithOutWhiteSpaces = () => {
	const quoteCharachters = quotes[ lastQuoteId ].quote.split('').filter(item => item != ' ' ).length
	console.log(quoteCharachters);
}

const getNumberOfWords = () => {
	const quoteWords = quotes[ lastQuoteId ].quote.split(' ').length
	console.log(quoteWords);
}

const addLike = () => {
	quotes[ lastQuoteId ].likes++;
	console.log(quotes[ lastQuoteId ].likes);
}

setRandomQuote()

document.getElementById( 'quoteGenerateBtn' ).addEventListener( 'click', setRandomQuote )

// Part 2 : Add buttons
// 1.In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

document.getElementById( 'quoteForm' ).addEventListener( 'submit', addQuote )

// 2.In the HTML file, under the displayed quote, create a few more buttons:
		// A button that gives the number of character inside each quote (space included)
		// A button that gives the number of character inside each quote (space NOT included)
		// A button that gives the number of words in each quote
		// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.

document.getElementById( 'charsWithSpacesBtn' ).addEventListener( 'click', getNumberOfCharactersWithWhiteSpaces )
document.getElementById( 'charsNotSpacesBtn' ).addEventListener( 'click', getNumberOfCharactersWithOutWhiteSpaces )
document.getElementById( 'wordsBtn' ).addEventListener( 'click', getNumberOfWords)
document.getElementById( 'likeBtn' ).addEventListener( 'click', addLike)

// Part 3 : Filter form
// 1.Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

const getAllQuotesAuthor = () => {
	const authorName = document.getElementById( 'authorName' ).value
	const quotesAuthor = quotes.filter( item => item.author.toLowerCase().includes( authorName.toLowerCase() ) )
	return quotesAuthor
}
let quotesAuthor = []
let currentQuoteAuthorId = 0
const setQuoteAuthor = (id) => {
	document.getElementById( 'quoteAuthor' ).textContent = quotesAuthor[ id ].quote;
	document.getElementById( 'author' ).textContent = quotesAuthor[ id ].author;
	currentQuoteAuthorId = id
}


document.getElementById( 'searchForm' ).addEventListener( 'submit', ( event ) => {
	event.preventDefault()
	quotesAuthor = getAllQuotesAuthor()
	setQuoteAuthor(0)
	console.log(quotesAuthor);
} )

// 2.Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.
// quote next and previous

document.getElementById( 'prevBtn' ).addEventListener( 'click', () => {
	if(currentQuoteAuthorId > 0)
		setQuoteAuthor( currentQuoteAuthorId - 1 )
} )

document.getElementById( 'nextBtn' ).addEventListener( 'click', () => {
	if(currentQuoteAuthorId < quotesAuthor.length - 1)
		setQuoteAuthor( currentQuoteAuthorId + 1 )
} )
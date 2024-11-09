// Exercise 2: Building a Basic CRUD API with Express.js
// Instructions
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

// 1.Create a new directory named book-api.

// 2.Inside the book-api directory, initialize a new Node.js project and install the express package.

// 3.Create a new file named app.js in the book-api directory.

// 4.In app.js, import the express module and create an instance of an Express app.
import { faker } from '@faker-js/faker';
import express from 'express'

const app = express()

app.use( express.json() )

// 5.Define a basic data array containing a few book objects. Each book object should have properties 
// like id, title, author, and publishedYear.
const books = [
	{
			bookId: 1,
			title: "The Time Machine",
			author: "Henry Morley",
			publishedYear: 1996
	},
	{
			bookId: 2,
			title: "Go Tell It on the Mountain",
			author: "Henry David Thoreau",
			publishedYear: 2015
	},
	{
			bookId: 3,
			title: "Blood Meridian",
			author: "Emily Brontë",
			publishedYear: 1978
	},
	{
			bookId: 4,
			title: "Clarissa",
			author: "Gustave Flaubert",
			publishedYear: 2001
	},
	{
			bookId: 5,
			title: "Beloved",
			author: "Rudyard Kipling",
			publishedYear: 1984
	}
]

// 6.Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
const PORT = 5001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

// const newBook = {
// 	title: faker.book.title(),
// 	author: faker.book.author(),
// 	publishedYear: faker.date.past().getFullYear()
// };

// console.log(newBook);


// 7.Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with 
// the books array.

app.get( '/api/books', ( req, res ) => {
	try {
		res.json( books )	
	} catch (error) {
		console.log( error );
	}
} )

// 8.Implement the “Read” route by defining a route at GET / api / books /: bookId.Extract the bookId parameter 
// from the URL and use it to find the corresponding book in the books array.If the book is found, send a JSON 
// response with the book details and a status code of 200( OK ).If the book is not found, send a 404 
// status with a “Book not found” message.

app.get( '/api/books/:bookId', ( req, res ) => {
	const { bookId } = req.params
	const book = books.find( item => item.bookId == bookId );
	
	if ( !book ) {
		return res.status(404).send('Book not found')
	}
	
	res.status( 200 ).json( book );
} )

// 9.Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON 
// body content.Inside the route handler, create a new book object with an incremented ID and the data 
// from the request body.Add the new book to the books array and return a JSON response with the new book and 
// a status code of 201( Created ).
 

app.post( '/api/books', ( req, res ) => {
	const { author, title, publishedYear } = req.body;
	const newBook =
	{
		bookId: books.length + 1,
		author,
		title,
		publishedYear
	}
	books.push( newBook );
	res.status(201).json(newBook)
} )


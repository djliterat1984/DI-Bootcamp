// Exercise 1: Building a RESTful API
// Instructions
// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// 1.Create a directory named blog-api.

// 2.Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// 3.Install the express package by running npm install express in the terminal.

// 4.Create a file named server.js.

// 5.In server.js, require the express package and set up an Express app.

// 6.Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

// 7.Implement the following routes using Express:
// 8.GET /posts: Return a list of all blog posts.
// 9.GET /posts/:id: Return a specific blog post based on its id.
// 10.POST /posts: Create a new blog post.
// 11.PUT /posts/:id: Update an existing blog post.
// 12.DELETE /posts/:id: Delete a blog post.

// 13.Implement error handling for invalid routes and server errors.

// 14.Start the Express app and listen on a specified port (e.g., 3000).

const express = require( 'express' );

const app = express();

app.use( express.json() )

const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

let posts = [
  {
    id: 1,
    title: "The Life of Cactus",
    content: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify."
  },
  {
    id: 2,
    title: "Top 15 Things to do When You are Bored",
    content: "Chase ball of string eat plants, meow, and throw up because I ate plants going to catch the red dot today going to catch the red dot today. I could pee on this if I had the energy. Chew iPad power cord steal the warm chair right after you get up for purr for no reason leave hair everywhere, decide to want nothing to do with my owner today."
  },
  {
    id: 3,
    title: "Introduction to Intermittent Fasting",
    content: "Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake."
  }
]

app.get( '/posts', ( req, res ) => {
	try {
		res.send(posts)	
	} catch (error) {
		console.log(error);
	}
} )

app.get( '/posts/:id', ( req, res ) => {
	try {
		const { id } = req.params
		const post = posts.find( value => value.id == id )
		
		if ( !post) {
			return res.status( 404 ).send( 'product not found' )
		}
		
		res.send(post)
			
	} catch (error) {
		console.log(error);
	}
} )

app.post( '/posts', ( req, res ) => {
	try {
		const {title, content} = req.body
		const newPost = { title, content, id: posts.length + 1 } 
		posts.push( newPost );
		res.sendStatus( 201 );
	} catch (error) {
		console.log(error);
	}
} )

app.put( '/posts/:id', ( req, res ) => {
	try {
		const id  = Number(req.params.id);
		const { title, content } = req.body
		
		const index = posts.findIndex( item => item.id == id );
		
		if ( index === -1 ) {
			console.log(index);
			return res.status( 404 ).send( `${index} putrt to update not found` )
		}
		
		posts[ index ] = { ...posts[ index ], title, content }
		res.json( posts )
	} catch (error) {
		console.log(error);
	}
} )

app.delete( '/posts/:id', ( req, res ) => {
	try {
		const { id } = req.params
		const index = posts.findIndex( item => item.id == id );
		if ( index === -1 ) {
			return res.status( 404 ).send( 'product to updtae not found' )
		}
		
		posts.splice( index, 1 )
		res.json()
	} catch (error) {
		console.log(error)
	}
} )
























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
	res.send(posts)
} )

app.get( '/posts/:id', ( req, res ) => {
	const { id } = req.params
	const post = posts.find( value => value.id == id )
	
	if ( !post) {
		return res.status( 404 ).send( 'product not found' )
	}
	
	res.send(post)
} )

app.post( '/posts', ( req, res ) => {
	const {title, content} = req.body
	const newPost = { title, content, id: posts.length + 1 } 
	posts.push( newPost );
	res.sendStatus( 201 );
} )

app.put( '/posts/:id', ( req, res ) => {
	const id  = Number(req.params.id);
	const { title, content } = req.body
	
	const index = posts.findIndex( item => item.id == id );
	
	if ( index === -1 ) {
		console.log(index);
		return res.status( 404 ).send( `${index} putrt to update not found` )
	}
	
	posts[ index ] = { ...posts[ index ], title, content }
	res.json( posts )
} )

app.delete( '/posts/:id', ( req, res ) => {
	const {id} = req.params
	const index = posts.findIndex( item => item.id == id );
	if ( index === -1 ) {
		return res.status( 404 ).send( 'product to updtae not found' )
	}
	
	posts.splice( index, 1 )
	res.json()
} )
























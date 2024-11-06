const express = require( "express" )

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

const products = [
	{id:101, name: 'iPhone', price: 800},
	{id:201, name: 'iPad', price: 700},
	{id:301, name: 'iWatch', price: 600}
]

// GET

app.get( '/products/all', ( req, res ) => {
	res.json(products)
} )

app.get( '/products/all/:prod_id', ( req, res ) => {
	console.log( req.params );
	const { prod_id } = req.params;
	const myProd = products.find( item => item.id == prod_id )
	if ( !myProd ){
		return res.status(404).send( 'not found' )
	}
	res.send(myProd)
} )

app.get( '/products/search', ( req, res ) => {
	console.log( req.query );
	const { name } = req.query;
	const filtered = products.filter( item => {
		return item.name.toLowerCase().includes(name.toLowerCase())
	} )
	
	if(filtered.length === 0)
		return res.status(404).send( 'not found' )
	res.json( filtered )
	
} )

// POST

app.post( '/products', ( req, res ) => {
	console.log( req.body );
	const {name, price} = req.body
	const newProd = { name, price, id: products.length + 1 } 
	products.push( newProd );
	// res.send( newProd )
	res.sendStatus( 201 );
} )

// PUT
app.put( '/products/:id', ( req, res ) => {
	const { id } = req.params;
	const { name, price } = req.body
	
	const index = products.findIndex( item => item.id == id );
	
	if ( index === -1 ) {
		return res.status( 404 ).send( 'product to updtae not found' )
	}
	
	products[ index ] = { ...products[ index ], name, price }
	res.json(products)
	
} )

// DELETE

app.delete( '/products/:id', ( req, res )=>{
	const { id } = req.params;
	const index = products.findIndex( item => item.id == id );
	if ( index === -1 ) {
		return res.status( 404 ).send( 'product to updtae not found' )
	}
	
	products.splice( index, 1 )
	res.json()
} )




























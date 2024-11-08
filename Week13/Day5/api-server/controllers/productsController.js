const {products} = require('../models/productsData.js') 

const getAllProducts = ( req, res ) => {
	res.json(products)
} 

const getProductById = ( req, res ) => {
	console.log( req.params );
	const { prod_id } = req.params;
	const myProd = products.find( item => item.id == Number(prod_id) )
	if ( !myProd ){
		return res.status(404).send( 'Product not found' )
	}
	res.send(myProd)
}

const addProduct = ( req, res ) => {
	console.log( req.body );
	const {name, price} = req.body
	const newProd = { name, price, id: products.length + 1 } 
	products.push( newProd );
	console.log('pushed');
	
	// res.send( newProd )
	res.sendStatus( 201 );
}

const productSearch = ( req, res ) => {
	console.log( req.query );
	const { name } = req.query;
	const filtered = products.filter( item => {
		return item.name.toLowerCase().includes(name.toLowerCase())
	} )
	
	if(filtered.length === 0)
		return res.status(404).send( 'Not found' )
	res.json( filtered )
}

const deleteProducts = ( req, res ) => {
	const { id } = req.params;
	const index = products.findIndex( item => item.id == Number(id) );
	if ( index === -1 ) {
		return res.status( 404 ).send( 'product to delete not found' )
	}
	
	products.splice( index, 1 )
	res.json(products)
}

const updateProduct = ( req, res ) => {
	const { id } = req.params;
	const { name, price } = req.bodyaaA
	
	const index = products.findIndex( item => item.id == Number(id) );
	
	if ( index === -1 ) {
		return res.status( 404 ).send( 'product to updtae not found' )
	}
	
	products[ index ] = { ...products[ index ], name, price }
	res.json(products)
	
}



module.exports = {
	getAllProducts,
	getProductById,
	deleteProducts,
	productSearch,
	addProduct,
	updateProduct,
}
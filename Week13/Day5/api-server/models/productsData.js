const db = require( '../config/neondb.js' );

const products = [
	{id:101, name: 'iPhone', price: 800},
	{id:201, name: 'iPad', price: 700},
	{id:301, name: 'iWatch', price: 600}
]

const getAllProductsDB = () => {
	db.select( '*' ).from( 'products' )
		.then( data => {
			console.log( data );
			return data;
	} )
}

module.exports = {
	products,
	getAllProductsDB
}
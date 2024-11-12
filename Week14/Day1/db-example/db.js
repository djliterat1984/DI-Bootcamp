const knex = require( 'knex' );
require( "dotenv" ).config()

// console.log(process.env);


const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT, PGCONNECTSTRING } = process.env;

const db = knex( {
	client: 'pg',
	connection: {
		connectionString: PGCONNECTSTRING, // se puede usar connectionstring o todas las otras variables
		// host: PGHOST,
		// port: PGPORT,
		// user: PGUSER,
		// password: PGPASSWORD,
		// database: PGDATABASE,
		ssl: {rejectUnauthorized:false} // to avoid this error, only in dev , in production we need to delete this line
	}
});

async function getVersion() {
	const result = await db.raw( 'select * from products where id=? and name=?',[1,'Product 100'] )
	console.log(result.rows);	
}

// getVersion();

// db.select( '*' ).from( 'products' )
// 	.where('id',1)
// 	.then( data => {
// 		console.log(data);
// 	} )

// db( 'products' ).select( '*' ).where( 'id', 1 )
// .then(data =>{
// 		console.log(data);
// } )

async function getQuery () {
	const rows = await db( 'products' ).select( '*' ).where( 'id', 2 )
	console.log(rows);
}

// getQuery()

// INSERT

// db( 'products' )
// 	.insert( { name: 'Product Z', price: 600, description: 'Y is the best' },['id','name'] )
// 	.then(data => {console.log(data)}
// )

// db( 'products' )
// 	.update( { name: 'Product XZ' }, [ 'id', 'name' ] )
// 	.where('id', 6)
// 	.then(data => {console.log(data)}
// )

// db( 'products' )
// 	.update( { name: 'Product XZ' })
// 	.where( 'id', 6 )
// 	.del()
// 	.returning('id')
// 	.then(data => {console.log(data)}
// )

const test = async () => {
	const trx = await db.transaction()
	try {
		const [product] = await db( 'products' )
			.insert( { name: 'F16', price: 1234567 }, [ 'id' ] )
			.transacting( trx )
		console.log( 'product:', product );
		
		await db( 'products' )
			.update( { description: 'fantastic 123 aircraft' } )
			.where( { id: product.id } )
			.transacting(trx)
		
		await trx.commit();
	} catch (error) {
		console.log( error );
		await trx.rollback();
	}
}

test()



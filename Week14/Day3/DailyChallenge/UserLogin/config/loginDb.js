const knex = require( 'knex' );
require( "dotenv" ).config()

const { PGCONNECTSTRING, PGPORT } = process.env;

const loginApiDb = knex( {
	client: 'pg',
	connection: {
		connectionString: PGCONNECTSTRING,
		port: PGPORT,
		ssl: {rejectUnauthorized:false} 
	}
} );

module.exports = {
	loginApiDb,
}
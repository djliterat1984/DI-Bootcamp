const knex = require( 'knex' );
require( "dotenv" ).config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT, PGCONNECTSTRING } = process.env;

const blogApiDb = knex( {
	client: 'pg',
	connection: {
		// connectionString: PGCONNECTSTRING,
		host: PGHOST,
		port: PGPORT,
		user: PGUSER,
		password: PGPASSWORD,
		database: PGDATABASE,
		ssl: {rejectUnauthorized:false} 
	}
} );

module.exports = {
	blogApiDb,
}
const knex = require( 'knex' );
require( "dotenv" ).config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT, PGCONNECTSTRING } = process.env;

const db = knex( {
	client: 'pg',
	connection: {
		connectionString: PGCONNECTSTRING, // se puede usar connectionstring o todas las otras variables
		// host: PGHOST,
		port: PGPORT,
		// user: PGUSER,
		// password: PGPASSWORD,
		// database: PGDATABASE,
		ssl: {rejectUnauthorized:false} // to avoid this error, only in dev , in production we need to delete this line
	}
} );

module.exports = db;
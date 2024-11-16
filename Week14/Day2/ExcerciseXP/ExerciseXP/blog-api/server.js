const express = require( 'express' );
const blogRouter = require( './routes/blogRoutes.js' );
const bookRouter = require( './routes/bookRoutes.js' );

const app = express();

app.use( express.json() );

const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

app.use( '/posts', blogRouter );
app.use( '/api/books', bookRouter );

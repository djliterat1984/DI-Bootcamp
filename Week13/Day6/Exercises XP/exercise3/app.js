const express = require( 'express' )
const bookRoutes = require('./routes/books.js')

const app = express();

app.use( express.json() );

const PORT = 3001
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

app.use('/', bookRoutes)

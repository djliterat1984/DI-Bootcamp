const express = require( 'express' );
const routes = require( './routes/todos.js' );

const app = express();

app.use( express.json() );

const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

app.use('/', routes)




































const express = require( 'express' );
const router = require( './routes/index.js' )

const app = express();

const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

app.use('/', router)




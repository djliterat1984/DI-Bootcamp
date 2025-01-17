const express = require( 'express' );
const cookiesParser = require( 'cookie-parser' );
const cors = require( 'cors' );
const userRouter = require( './routes/userRouter.js' );




const app = express();


const { PORT } = process.env;


app.listen( PORT || 5001, () => {
	console.log(`run on  ${PORT || 5001}`);
} )


app.use( express.json() );
app.use( cookiesParser() );
app.use(
	cors( {
		credentials: true,
		origin:['http://localhost:5173']
	} )
)

app.use( '/api/user', userRouter );

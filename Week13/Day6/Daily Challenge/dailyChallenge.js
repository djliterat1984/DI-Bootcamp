const express = require( 'express' );
const routes = require( './routes/trivia.js' )
const cors = require( 'cors' );

const app = express();
app.use( express.json() )

const allowedOrigins = ['http://localhost:3002/quiz', 'http://localhost:3002/quiz/score'];
app.use(cors({
  origin: function(origin, callback){
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));

const PORT = 3002;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

app.use( '/quiz', routes );
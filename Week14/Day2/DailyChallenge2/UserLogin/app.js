const express = require( 'express' );
// const bp = require('body-parser');
const loginRoute = require( './routes/loginRouter.js' );
const usersRoute = require( './routes/usersRouter.js' );

const app = express();

app.use( express.json() );
// app.use(bp.urlencoded({extended:false}));
// app.use(bp.json());

// // app.use('/',express.static(__dirname+'/public'));

const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

app.use( '/', loginRoute );
app.use( '/users', usersRoute );

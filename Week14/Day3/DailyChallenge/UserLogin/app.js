const express = require( 'express' );
const bp = require( 'body-parser' );

const loginRoute = require( './routes/loginRouter.js' );
const usersRoute = require( './routes/usersRouter.js' );

const app = express();

app.use( express.json() );
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    res.header("Access-Control-Allow-Methods", "OPTIONS,POST,GET,PUT,PATCH")
    next();
} );

app.use(express.static('public'))
app.use(express.static('files'))
app.use(bp.urlencoded({extended:false}));
app.use( bp.json() );


// // app.use('/',express.static(__dirname+'/public'));
//app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

app.use( '/', loginRoute );
app.use( '/users', usersRoute );

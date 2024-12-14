import express from 'express';
import bp from 'body-parser';
import cors from 'cors';

const app = express();

app.use( express.json() );

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());
app.use( cors())
// // app.use('/',express.static(__dirname+'/public'));
//app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

app.get( '/api/route', ( req, res ) => {
	res.send( 'Hello From Express' )
} );
app.post( '/api/world', ( req, res ) => {    
    const post = req.body.data;
    res.send( 'I received your POST request. This is what you sent me: '+ post )
} )


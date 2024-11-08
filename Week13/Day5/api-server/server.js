const express = require( "express" )
const productRouter = require('./routes/productsRouter.js')

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }))
app.use( express.json() )
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

app.use( '/products', productRouter )
const Parser = require('rss-parser');
const parser = new Parser();
const url = 'https://thefactfile.org/feed/'

let items = []

const express = require( 'express' );
// const bp = require( 'body-parser' );
// const e = require( 'express' );
// const cors = require( 'cors' );
// const {rssParser }= require('./rss')

const app = express();

// app.use( express.json() );

app.set('view engine', 'ejs');

const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

async function populateItems() {
	const feed = await parser.parseURL( url );
	items = feed.items;
}
populateItems()

app.get( '/', renderFeed );

async function renderFeed(req,res) {
	const feed = await parser.parseURL( url );
	// const title = feed.title;
	// const description = feed.description;
	const items = feed.items;
	res.render( 'index.ejs',{items})
}

app.get('/search', searchFeed)

function searchFeed(req,res) {
	res.render('index.ejs', {items: []})
}

// app.post('/search/title', ( req, res ) => {

// })
// app.post('/search/category', ( req, res ) => {

// })

// async function run (){

//   const feed = await parser.parseURL(url);
//   console.log(feed.title, feed.description);

//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });

// };

// run();
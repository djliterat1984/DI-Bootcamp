const {Router} = require( 'express' );
const {triviaQuestions} = require('../model/triviaData.js')

const routes = Router();
let indexTrivia = 0;
let score = 0;
let answers = [];

routes.get( '/', ( req, res ) => {
	res.json( triviaQuestions[ indexTrivia ].question );
} )

routes.get( '/score', ( req, res ) => {
	answers.forEach( ( item, index ) => {
		if ( item.toLowerCase() == triviaQuestions[ index ].answer.toLowerCase() ) {
			score++
		}
	} )
	res.json(score)
} )

routes.post( '/', ( req, res ) => {
	const { answer } = req.body;
	answers.push( answer );
	indexTrivia++;
	if ( indexTrivia >= triviaQuestions.length )
		res.status( 200 ).json( "0" )
	else
		res.status( 200 ).json( "1" );
} )

module.exports = routes
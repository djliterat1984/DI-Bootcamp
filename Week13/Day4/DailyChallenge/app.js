// Instructions
// Create a fun emoji guessing game using an Express API.
// The game will present players with a random emoji and a set of options. Players need to guess the correct name of the emoji from the given options.
// The game will keep track of the player’s score and provide feedback on their guesses.

// Requirements:

// 1.Set up an Express server to handle the game.
// 2.Create an array of emoji objects each containing the emoji character and its corresponding name.
// to add emoji ctrl + comm + spacebar
// 3.Generate a random emoji from the array and select a few incorrect options as distractors.
// 4.Using a form, present the player with the random emoji and multiple choice options 
// ( including the correct name).
// 5.Allow the player to submit their guess. Get the data from the form and POST it, using the Fetch API.
// 6.Check if the guess is correct and update the player’s score
// 7.Provide feedback to the player, indicating whether their guess was correct or not.
// 8.Continue presenting new emojis and options for the player to guess.
// 9.Keep track of the player’s total score.
// 10.Implement a leaderboard to show the top scores.
// sample emojis

// const emojis = [
//     { emoji: '😀', name: 'Smile' },
//     { emoji: '🐶', name: 'Dog' },
//     { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
// ];
// Advanced Features (Optional):

// Add a time limit for each guess.
// Implement user authentication to save and display personalized scores.
// Use emojis from a larger dataset or an external API.
// Implement difficulty levels that affect the number of options or time limit.
// Implement a “hint” feature that provides a clue about the emoji’s name

const express = require( 'express' );
const cors = require('cors')
const app = express();

app.use( express.json() )

const allowedOrigins = ['http://localhost:3001/all', 'http://localhost:3001/result'];
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



const PORT = 3001;
app.listen( PORT, () => {
	console.log(`run on ${PORT}`);
} )

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
	{ emoji: '🌮', name: 'Taco' },
	{ emoji: '👌', name: 'Ok' },
	{ emoji: '😛', name: 'tongue'}
];

app.get( '/all', ( req, res ) => {
	res.json({emojis})
} )

app.post( '/result', ( req, res ) => {	
	try {
		const { emoji, name } = req.body
		const correctEmoji = emojis.find( item => item.emoji == emoji );
		if(correctEmoji.name === name)
			res.sendStatus(200)
		else
			res.sendStatus(404)
	} catch (error) {
		console.log(error);
	}
} )

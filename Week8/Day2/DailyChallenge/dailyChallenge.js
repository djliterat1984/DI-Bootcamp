// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Challenge: Mad Libs</title>
//  </head>
//  <body>

//     <h1>Mad Libs</h1>

//     <form id="libform">
//         <label for="noun">Noun:</label><input type="text" id="noun"><br>
//         <label for="adjective">Adjective:</label><input type="text" id="adjective"><br>
//         <label for="person">Someone's Name:</label><input type="text" id="person"><br>
//         <label for="verb">Verb:</label><input type="text" id="verb"><br>
//         <label for="place">A place:</label><input type="text" id="place"><br>
//         <button id="lib-button">Lib it!</button>
//     </form>

//     <p>Generated story: 
//     <span id="story"></span>
//     </p>

//     <script src="..."></script>

//  </body>
// </html>
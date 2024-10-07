// Exercise 2 : Move the box
// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #container {
//           width: 400px;
//           height: 400px;
//           position: relative;
//           background: yellow;
//         }
//         #animate {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <p><button onclick="myMove()">Click Me</button></p>
//         <div id="container">
//           <div id="animate"></div>
//         </div>
//     </body>
//     </html>


// 1.Copy the code above, to a structured HTML file.
// 2.In your Javascript file, use setInterval to move the <div id="animate"> to the right side of 
// the < div id = "container" >, when the button is clicked on.

let square = document.getElementById( 'animate' );
const rightSide = 400-50 // 400 is the width of the container and 50 the width of the square
function myMove () {
	let i = 0;
	let id = setInterval( () => {
		if ( square.style.left === `${rightSide}px` ) {
			square.style.left = '0px'
			i = 0
			clearInterval(id)
		} else {
			square.style.left = `${ i }px`
			i++
		}
	},10 )
}

// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of 
// the < div id = "container" >.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

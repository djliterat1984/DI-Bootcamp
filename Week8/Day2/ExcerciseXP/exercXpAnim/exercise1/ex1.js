
// Exercise 1: Timer
// Instructions
// Using this HTML code:

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//     </body>
//     </html>


// Part I
// 1.In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2.The function will alert “Hello World”.

setTimeout(() => alert('Hello World'),2000)


// Part II
// 1.In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2.The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
let divContainer = document.getElementById( 'container' );
const addParagraph = () => {
	let paragraph = document.createElement( 'p' )
	paragraph.textContent = 'Hello world';
	divContainer.append(paragraph)
}
setTimeout( addParagraph, 2000 )


// Part III
// 1.In your Javascript file, using setInterval, call a function every 2 seconds.
// 2.The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// 3.The interval will be cleared (ie. clearInterval), when the user will click on the button.
// 4.Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

const addParagraph2 = () => {
	if ( divContainer.children.length === 5 ){
		divContainer.innerHTML = ''
		clearInterval( id )
	} else {
		addParagraph()
	}
}
const id = setInterval( addParagraph2, 2000 );

let clearBtn = document.getElementById( 'clear' )
clearBtn.addEventListener( 'click', () => {
	divContainer.innerHTML = ''
	clearInterval(id)
} )

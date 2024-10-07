// Exercice 4 : Volume of a sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 

let radiusInput;
let volumenInput;
let inputItems = document.getElementsByTagName( 'input' )
	
	for (let i = 0; i < inputItems.length; i++) {
		let currentItem = inputItems[ i ]
		if ( currentItem.id === 'radius' )
			radiusInput = currentItem
		else if ( currentItem.id === 'volume' )
			volumenInput = currentItem		
		else
			continue
	}

let calculateBtn = document.getElementById( 'submit' );

calculateBtn.addEventListener( 'click', (event) => {
	event.preventDefault()
	let volumen = Math.round( 4 / 3 * Math.PI * radiusInput.value ** 3)
	volumenInput.value = volumen
} )
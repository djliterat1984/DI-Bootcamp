// Instructions
// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// 1.Create an array which value is the planets of the solar system.
// 2.For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// 3.Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// 4.Finally append each div to the <section> in the HTML (presented below).
// 5.Bonus: Do the same process to create the moons.
//    Be careful, each planet has a certain amount of moons. How should you display them?
//    Should you still use an array for the planets ? Or an array of objects ?

const planets = [ 'Marte', 'Jupiter', 'Tierra', 'Venus','Saturno','Neptuno' ]
let i = 1
planets.forEach( planet =>
{
	let newDiv = document.createElement( 'div' )
	newDiv.className = 'planet'
	newDiv.textContent = planet

	switch (i) {
		case 1:
			newDiv.style.backgroundColor = 'red'
			break;
		case 2:
			newDiv.style.backgroundColor = 'green'
			break;
		case 3:
			newDiv.style.backgroundColor = 'blue'
			break;
		case 4:
			newDiv.style.backgroundColor = 'yellow'
			break;
		case 5:
			newDiv.style.backgroundColor = 'lightgreen'
			break;
		case 5:
			newDiv.style.backgroundColor = 'green'
			break;
		case 6:
			newDiv.style.backgroundColor = 'white'
			break;
		case 7:
			newDiv.style.backgroundColor = 'orange'
			break;
		case 8:
			newDiv.style.backgroundColor = 'pink'
			break;
		case 9:
			newDiv.style.backgroundColor = 'violet'
			break;
		default:
			newDiv.style.backgroundColor = 'white'
			break;
	}

	
	let section = document.getElementsByClassName( 'listPlanets' )[0]
	section.appendChild( newDiv )
	i++
} )

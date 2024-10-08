let findButton;
let divInfoContainer;
const retrieveElements = () => {
	findButton = document.getElementById( 'findBtn' )
	findButton.addEventListener( 'click', (event) => {
		event.preventDefault();
		let userResponse = prompt('Which star wars do you want to look for?')
		divInfoContainer = document.getElementById( 'infoContainer' )
		divInfoContainer.innerHTML = ''
		// document.getElementById( 'loaderContainer' ).style.display = 'block'
		getData(userResponse)
	} )
}

let planetName;
let info;
const getData = ( character ) => {	
	fetch(`https://www.swapi.tech/api/people/?name=${character}`)
		.then(res => res.json())
		.then( data => {
			console.log( data )
			info = data.result[0].properties
			getPlanet( info )
		} )
		.catch( err => {
			// document.getElementById( 'loadingSpinner' ).style.display = 'none'
			displayInfo( [], '', true )			
			console.error( 'error', err )	
		} )
}

const getPlanet = (dataInfo) => {
	fetch(dataInfo.homeworld)
		.then(res => res.json())
		.then( data => {	
			planetName = data.result.properties.name
			displayInfo(dataInfo, planetName)
		} )
		.catch( err => {
			document.getElementById( 'loaderContainer' ).style.display = 'none'
			displayInfo([],'',true)
			console.error( err )
		} )
}

const displayInfo = ( data, planet, hasError = false ) => {	
	divInfoContainer = document.getElementById( 'infoContainer' )
	if ( hasError ) {
		divInfoContainer.innerHTML = 'Oh No! That person isnt available'
		divInfoContainer.style.color = 'white'
		divInfoContainer.style.fontSize = '35px'
		divInfoContainer.style.justifyContent = 'center'
		divInfoContainer.style.paddingTop = '20px'
	} else {
		// document.getElementById( 'loaderContainer' ).style.display = 'none'
		let nameData = document.createElement( 'p' )
		nameData.textContent = data.name;
		nameData.style.color = 'white';
		nameData.style.fontSize = '30px'
		
		let heightData = document.createElement( 'p' )
		heightData.textContent = `Height: ${data.height}`;
		heightData.style.color = 'white';
		
		let genderData = document.createElement( 'p' )
		genderData.textContent = `Gender: ${data.gender}`;
		genderData.style.color = 'white';
		
		let birthYear = document.createElement( 'p' )
		birthYear.textContent = `Birth Year: ${data.birth_year}`;
		birthYear.style.color = 'white';
		
		let homeWorld = document.createElement( 'p' )
		homeWorld.textContent = `Home World: ${planet}`;
		homeWorld.style.color = 'white';
		
		// document.getElementById( 'loadingSpinner' ).style.display = 'none';
		divInfoContainer = document.getElementById( 'infoContainer' )
		divInfoContainer.style.flexDirection = 'column'
		divInfoContainer.style.justifyContent = 'space-evenly'
		divInfoContainer.style.alignItems = 'center'
		divInfoContainer.append( nameData )
		divInfoContainer.append( heightData )
		divInfoContainer.append( genderData )
		divInfoContainer.append( birthYear )
		divInfoContainer.append( homeWorld )	
	}
}

retrieveElements();
BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

const getId = () => {
	return Math.round(Math.random() * 1000) 
}

const setPokemon = (data) => {
	const pokemonImg = document.getElementById( 'pokemonImg' );
	pokemonImg.src = data.sprites.front_shiny;
	
	const pokemonName = document.getElementById( 'pokName' );
	pokemonName.textContent = `Name: ${data.name}`
	
	const pokemonId = document.getElementById( 'pokId' );
	pokemonId.textContent = `Id: ${data.id}`
	
	const pokemonHeight = document.getElementById( 'pokHeight' );
	pokemonHeight.textContent = `Height: ${data.height}`
	
	const pokemonWeight = document.getElementById( 'pokWeight' );
	pokemonWeight.textContent = `Weight: ${data.weight}`
	
	const pokemonType = document.getElementById( 'pokType' );
	const typeList = data.types
	let types = ''
	for (let i = 0; i < typeList.length; i++) {
		if(typeList.length - 1 == i)
			types += typeList[ i ].type.name
		else
			types += typeList[ i ].type.name + " - "
	}
	pokemonType.textContent = `Types: ${types}`
}

const getPokemon = async ( pokId ) => {
	id = pokId;
	try {
		const response = await fetch( `${ BASE_URL }/${id}` );
		if(response.ok){
			const data = await response.json()
			setPokemon(data)
		}
		else {
			console.log(response.statusText)
		}
	} catch (error) {
		console.log(error)
	}
}

let id = getId();
getPokemon( id )

document.getElementById( 'prevPok' ).addEventListener('click', () => getPokemon(id-1))
document.getElementById( 'randomPok' ).addEventListener('click', () => getPokemon(getId()))
document.getElementById( 'nextPok' ).addEventListener( 'click', () => getPokemon( id + 1 ) )

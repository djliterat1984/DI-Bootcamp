// Use the Fetch API, to retrieve Chuck Norris jokes from a given category, using this URL:

// https://api.chucknorris.io/jokes/random?category={category}

// Check out the API Chuck Norris Documentation : https://api.chucknorris.io/

// Make sure to check the Response status and throw an error accordingly

const category = 'animal'
fetch( `https://api.chucknorris.io/jokes/random?category=${ category }` )
	.then( response => {
		if ( response.ok )
			return response.json()
		else
			throw new Error( 'error' )
	} )
	.then( obj => {
		console.log(obj.value);
	} )
	.catch( error => 
		console.log(error)
	)
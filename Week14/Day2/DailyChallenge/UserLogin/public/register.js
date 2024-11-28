const register = document.getElementById( 'registerInputs' );
register.addEventListener( 'submit', async ( e ) => {
	try {
		e.preventDefault();
		const registerData = new FormData( register );
		const newUser = {};
		registerData.forEach( ( value, key ) => {
			newUser[ key ] = value;
		} )
		const response = await fetch( 'http://localhost:3001/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( newUser )
		} )
		const data = await response.json()
		console.log( data );
		if ( data.errorMessage )
			document.getElementById( 'resultMessage' ).innerText = data.errorMessage
		else
			document.getElementById( 'resultMessage' ).innerText = 'User Created';
	} catch ( error ) {
		console.log( error );	
	}
	finally {
		register.reset();
	}
})

register.addEventListener( 'change', ( e ) => {
	e.preventDefault();
	let hasEmptyField = false
	const registerData = new FormData( register );
	registerData.forEach( ( value ) => {
		if ( value === '' )
			hasEmptyField = true
	} );

	if ( !hasEmptyField ) {
		const submitBtn = document.getElementById( 'submitRegister' );
		submitBtn.disabled = false
	}
} )

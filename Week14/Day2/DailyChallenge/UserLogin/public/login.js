let username = '';
let password = '';

const login = document.getElementById( 'loginInputs' );
login.addEventListener( 'submit', ( e ) => {
	e.preventDefault();	
	fetch( 'http://localhost:3001/login', {
		method: 'POST',
    headers: {
    	'Content-Type': 'application/json',
      },
		body: JSON.stringify( { username, password } )
	} )
		.then( response => response.json())
		.then( data => {
			const message = document.getElementById( 'loginMessage' );
			if ( data.errorMessage ) {
				message.innerText = data.errorMessage;
			}
			else {
				message.innerText = `Hi ${username} welcome back again!`
			}
		} )
		.catch( error => console.log( error ) )
	.finally(login.reset())
} )

login.addEventListener( 'change', ( e ) => {
	e.preventDefault();
	let hasEmptyField = false
	const loginData = new FormData( login );
	loginData.forEach( ( value,key ) => {		
		if ( value === '' )
			hasEmptyField = true
		
		if ( key === 'username' )
			username = value;
		else
			password = value;
	} );
	
	if ( !hasEmptyField ) {
		const submitBtn = document.getElementById( 'loginBtn' );
		submitBtn.disabled = false	
	}
} )




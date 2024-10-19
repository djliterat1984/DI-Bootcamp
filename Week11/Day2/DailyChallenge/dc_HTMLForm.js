document.getElementById( 'sendBtn' ).addEventListener( 'click', ( event ) => {
	event.preventDefault();
	const name = document.getElementById( 'name' ).value;
	const lastName = document.getElementById( 'lastName' ).value;
	document.body.append(`{"name":"${ name }", "lastname": "${ lastName }"}`)
} )




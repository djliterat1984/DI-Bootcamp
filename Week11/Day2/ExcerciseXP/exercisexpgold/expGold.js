document.getElementById( 'submitBtn' ).addEventListener( 'click', ( event ) => {
	event.preventDefault()
	const name = document.getElementById( 'name' ).value
	const lastname = document.getElementById('lastName').value

	window.localStorage.setItem('name', name)	
	window.localStorage.setItem( 'lastname', lastname )	
	window.location.href = './file2.html'
} )
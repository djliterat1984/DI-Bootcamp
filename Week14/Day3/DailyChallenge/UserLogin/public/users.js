const allUsersBtn = document.getElementById( 'usersBtn' );
const userByIdBtn = document.getElementById( 'userByIdBtn' );
const updateUserBtn = document.getElementById( 'updateUserBtn' );
const container = document.getElementById( 'container' );

allUsersBtn.addEventListener( 'click', async() => {
	const response = await fetch( 'http://localhost:3001/users' );
	const data = await response.json();
	console.log(data);
	const users = data.map(value => `id: ${value.id} - firstname: ${value.firstname} - Lastname: ${value.lastname} - email: ${value.email} \n`)
	container.innerText = users;
} )

userByIdBtn.addEventListener( 'click', async ( ) => {
	const id = prompt( 'Enter the user id: ' ) 
	const response = await fetch( `http://localhost:3001/users/${id}` );
	const data = await response.json();
	container.innerText = JSON.stringify(data);
} )

updateUserBtn.addEventListener( 'click', async () => {
	const id = prompt( 'Enter the user id: ' );
	const email = prompt('Enter the new email: ')
	const response = await fetch( `http://localhost:3001/users/${ id }`, {
		method: 'PUT',
    headers: {
    	'Content-Type': 'application/json',
      },
		body: JSON.stringify( {email})
	} );
	const data = await response.json();
	container.innerText = JSON.stringify(data);
} )


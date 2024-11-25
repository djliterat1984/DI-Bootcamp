import { useState, useEffect } from 'react';

const ExampleFunctionComponent = ( props ) => {
	
	const [ users, setUsers ] = useState( [] )
	const [inputValue, setInputvalue] = useState('')
	
	
	useEffect( () => {
		console.log( 'my use effect' );
		if(inputValue !== '')
			fetchUsers()
	},[inputValue])
	
	const fetchUsers = () => {
		fetch( 'https://jsonplaceholder.typicode.com/users' )
			.then( ( res ) => res.json() )
			.then( ( data ) => {
				console.log( data )
				setUsers(data)
			} )
			.catch(error => console.log(error))
	}
	
	return (
		<>
			<div>
				<h2>Example Function component</h2>
				<button onClick={ () => fetchUsers() }>Get Users</button>
				<div>
					<input type="text" onChange={(e) => setInputvalue(e.target.value)}/>
					<h2>My input text: {inputValue}</h2>
				</div>
				{
					users.map( ( item, index ) => {
						return <div key={ index }>{item.name}</div>
					} )
				}
			</div>
		</>
		
	)
}

export default ExampleFunctionComponent;
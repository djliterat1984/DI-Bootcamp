import React from 'react';

class ExampleClassComponent extends React.Component{
	
	constructor() {
		super();
		this.state = {
			users: [],
			text: 'Please click the button',
			input:''
		}
		console.log('constructor');
	}
	
	componentDidMount = () => {
		console.log('componentDidMount');
	}
	
	componentDidUpdate = (prevProps, prevState) => {
		console.log( 'componentDidUpdate' );
		console.log( prevProps );
		console.log(prevState);	
	}
	
	fetchUsers = () => {
		fetch( 'https://jsonplaceholder.typicode.com/users' )
			.then( ( res ) => res.json() )
			.then( ( data ) => {
				console.log( data )
				this.setState({users:data, text:'Succefully!!!!'})
				// this.state.users = data;
				console.log('users',this.state.users);
			} )
			.catch(error => console.log(error))
	}
	
	onchangeInput = ( e ) => {
		this.setState({input:e.target.value})
}
	
	render ()
	{
		console.log('render');
		
		return (
			<>
				<h2>Example Class component</h2>
				<button onClick={ () => this.fetchUsers() }>Get Users</button>
				<div>
					<input type="text" onChange={(e)=>this.onchangeInput(e)}/>
					<h2>My input text: {this.state.input}</h2>
				</div>
				<h3>{this.state.text}</h3>
				{
					this.state.users.map( ( item, index ) => {
						return <div key={ index }>{item.name}</div>
					} )
				}
			</>
		)
	}
}

export default ExampleClassComponent
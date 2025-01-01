import React, { Component } from 'react';

class FavoriteColor extends Component {
	state = {
		favouriteColor: 'red',
		show: true,
	}
	shouldComponentUpdate ( nextProps, nextState ) { return true }
	
	componentDidMount () {
		setTimeout(() => {
			this.setState({favouriteColor: 'yellow'})
		},3000);
	}
	
	componentDidUpdate () {
		console.log( "after update" );
	}
	
	getSnapshotBeforeUpdate () {
		console.log( "in getSnapshotBeforeUpdate" );
		return null;
	}
	
	handleClicked = () => {
		this.setState({favouriteColor: 'blue'})
	}
	
		
	handleClick = () => {
		this.setState( {show:false} )
	}
	
	render() {
		return (
			<div>
				<header style={{color:'black'}}>My favourite color is { this.state.favouriteColor }</header>
				<button onClick={ this.handleClicked }>Change to blue</button>
				{ this.state.show && <Child show={this.state.show} />}
				 <button onClick={this.handleClick}>Delete Header</button>
			</div>
		);
	}

}


export class Child extends Component {
	
	componentWillUnmount () {
		alert( 'The component named Header is about to be unmounted' );
	}
	
	render () {
			return (
				<>
					<header style={ { color: 'black' } }>Hello World</header>
				</>
			);
	}
}


export default FavoriteColor;
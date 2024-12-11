import React, { Component } from 'react';

// class FavoriteColor extends Component {
// 	state = {
// 		favouriteColor: 'red',
// 		show:true
// 	}
// 	shouldComponentUpdate ( nextProps, nextState ) { return true }
	
// 	componentDidMount () {
// 		console.log(this.state.favouriteColor);
		
// 		this.setState({favouriteColor: 'yellow'})
// 	}
	
// 	componentDidUpdate () {
// 		console.log(this.state.favouriteColor);
// 		console.log( "after update" );
// 	}
	
// 	getSnapshotBeforeUpdate () {
// 		console.log( "in getSnapshotBeforeUpdate" );
// 		return { favouriteColor: this.state.favouriteColor }
// 	}
	
// 	handleClicked = () => {
// 		this.setState({favouriteColor: 'blue'})
// 	}
	

	
// 	render() {
// 		return (
// 			<div>
// 				<header style={{color:'black'}}>My favourite color is { this.state.favouriteColor }</header>
// 				<button onClick={this.handleClicked}>Change to blue</button>
// 			</div>
// 		);
// 	}

// }

class Child extends Component {
	
	state = {
		favouriteColor: 'red',
		show:true
	}
	
	componentWillUnmount () {
		alert( 'component will unMount' );
	}
	
	handleClick = () => {
		this.setState( {show:false} )
	}
	
	render () {
			return (
				<>
					{ this.state.show && <header style={ { color: 'black' } }>Hello World { this.state.favouriteColor }</header> }
					<button onClick={this.handleClick}>Delete Header</button>
				</>
			);
	}
}


export default Child;
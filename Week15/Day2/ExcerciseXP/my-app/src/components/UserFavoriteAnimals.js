import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
	render() {
		return (
			<ul>
				{ this.props.animals.map( (item,index) => <li key={index}>{ item }</li>)}
			</ul>
		);
	}
}

export default UserFavoriteAnimals;
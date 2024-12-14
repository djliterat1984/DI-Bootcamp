import React, { Component } from 'react';
import data from '../helpers/languagesData.json';

class Example1 extends Component {
	render () {
		return (
			<div>
				<ul>
					{data.SocialMedias.map((item,index) => <li key={index}>{item}</li>)}
				</ul>
			</div>
		);
	}
}

export default Example1;
import React, { Component } from 'react';
import data from '../helpers/languagesData.json';

class Example2 extends Component {
	render() {
		return (
			<div>
				<ul>
					{ data.Skills.map( ( item, index ) => {
						return (
							<div key={index}>
								<h2>{ item.Area }</h2>
								{ item.SkillSet.map( ( item, index ) => {
									return (
										<li key={ index }>{item.Name}</li>
									)
								} ) }
							</div>
						)
					} ) }
				</ul>
			</div>
		);
	}
}

export default Example2;
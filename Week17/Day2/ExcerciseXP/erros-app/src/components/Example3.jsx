import React, { Component } from 'react';
import data from '../helpers/languagesData.json';

class Example3 extends Component {
	render() {
		return (
			<div>
				{ data.Experiences.map( ( item, index ) => {
					return (
						<div key={index}>
							<img src={ item.logo } alt="" />
							<a href={ item.url }><h2>{ item.companyName }</h2></a>
							{ item.roles.map( ( item, index ) => {
								return (
									<div key={index}>
										<h2>{item.title}</h2>
										<h2>{ item.startDate } { item.location }</h2>
										<h2>{item.description}</h2>
									</div>
								)
							} ) }
						</div>
					)
				} ) }
			</div>
		);
	}
}

export default Example3;
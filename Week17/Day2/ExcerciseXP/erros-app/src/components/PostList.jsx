import React from 'react'
import postsData from '../helpers/postsData.json';

export const PostList = () => {	
	return (
		<div style={ { color: 'black' } }>
			<h1>Hi this is a Title</h1>
			{ postsData.map( (item, index) => {
				return (
					<div key={index}>
						<h1 style={ { color: 'black' } } >{ item.title }</h1>
						<h2 style={ { color: 'black' } } >{ item.content }</h2>
					</div>
			)
			} ) }
		</div>
	)
}

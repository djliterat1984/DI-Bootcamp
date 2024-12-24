import React from 'react'
import  ReactionButton  from './ReactionButton';

export const Article = ( props ) => {
	const { post } = props;
	
	return (
		<article key={post.id}>
			<h2>{ post.title }</h2>
			<h4>{ post.body }</h4>
			<ReactionButton
				post={post}
			/>
		</article>
	)
}


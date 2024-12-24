import React, { useEffect } from 'react'
import { usePostsSelector, useStatusSelector, useFetchPosts } from './state/hooks';
import { Article } from './Article';

import './posts.css';

export const PostsList = (props) => {
	const posts = usePostsSelector();
	const status = useStatusSelector();
	const callFetchPosts = useFetchPosts();

	useEffect(() => {
		callFetchPosts();
	}, [])
	
	
	if ( status == 'loading' )
		return 'loading....'
	else if(status === 'success')
		return (
			<div>
				<h1>Posts</h1>
				{ posts.map( ( item ) => {
					return (
						<Article post={item} />
					)
				} ) }
			
			</div>
	)
}

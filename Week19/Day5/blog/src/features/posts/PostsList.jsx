import React, { useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { fetchPosts } from './state/postsSlice';

import './posts.css';
import { Article } from './Article';

export const PostsList = (props) => {
	
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch( fetchPosts() );
	}, [])
	
	const posts = useSelector( state => state.postsReducer.posts );
	const status = useSelector( state => state.postsReducer.status );
	
	if ( status == 'loading' )
		return 'loading....'
	else if(status === 'success')
		return (
			<div>
				<h1>Posts</h1>
				{ posts.map( ( item ) => {
					return (
						<Article item={item} />
					)
				} ) }
			
			</div>
	)
}

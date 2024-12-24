import { selectPosts, selectStatus } from './selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, addReaction } from './postsSlice';
import { useCallback } from 'react';

export const usePostsSelector = () => {
	return useSelector( selectPosts );
}

export const useStatusSelector = () => {
	return useSelector( selectStatus );
}

export const useFetchPosts = () => {
	const dispatch = useDispatch();
	return useCallback( () => {
		dispatch( fetchPosts() );
	}, [dispatch] )
}

export const useAddReaction = () => {
	const dispatch = useDispatch();
	return useCallback( (id,name) => {
		dispatch( addReaction( {id,name} ));
	}, [dispatch] )
}
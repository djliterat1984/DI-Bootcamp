import { useSelector, useDispatch } from 'react-redux';
import { selectUsers } from './selector';
import { fetchUserPosts } from './slice';
import { useCallback } from 'react';

export const useusersselector = () => {
	return useSelector( selectUsers );
}

export const useSelectorAuthor = () => {
	return useSelector(selectAuthor)
}

// expport

export const useFetchUsers = () => {
	const dispatch = useDispatch();
	return useCallback( () => {
		dispatch(fetchUserPosts())
	}, [dispatch] )
} 
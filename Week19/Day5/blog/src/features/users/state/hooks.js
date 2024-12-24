import { selectUser } from './selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserPosts} from './slice';
import { useCallback } from 'react';

export const useUserSelector = () => {
	return useSelector( selectUser );
}

export const useFetchUsers = () => {
	const dispatch = useDispatch();
	return useCallback( () => {
		dispatch( fetchUserPosts() );
	}, [dispatch] )
}
import { useCallback } from 'react';
import { selectBooks, selectFilteredBooks } from './selector';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenre } from './bookSlice';


export const useBooksSelector = () => {
	return useSelector( selectBooks );
}

export const useFilteredBooks = () => {
	return useSelector( selectFilteredBooks );
}

export const useFilterByGenre = () => {
	const dispatch = useDispatch();
	return useCallback( (selectedOption) => {
		dispatch(filterByGenre(selectedOption))
	},[dispatch] )
}
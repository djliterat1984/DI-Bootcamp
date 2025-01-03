import { useCallback } from 'react';
import { selectCategories, selectCategory,  } from './selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addCat, editCat, removeCat, selectedCategory,  } from './categorySlice';

export const useCategoriesSelector = () => {
	return useSelector( selectCategories );
}

export const useAddCat = () => {
	const dispatch = useDispatch();
	return useCallback(
		(category) => {
			dispatch( addCat( category ) );
		}, [ dispatch ]
	)
}

export const useRemoveCat = () => {
	const dispatch = useDispatch();
	return useCallback(
		(id) => {
			dispatch( removeCat( id ) );
		}, [ dispatch ]
	)
}

export const useEditCat = () => {
	const dispatch = useDispatch();
	return useCallback(
		( category, id ) => {
			dispatch( editCat( {category, id} ) );
		}, [ dispatch ]
	)
}

export const useSelectCategory = () => {
	const dispatch = useDispatch();
	return useCallback(
		( selectedCat ) => {
			dispatch( selectedCategory( selectedCat ) );
		},[dispatch]
	)
}

export const useSelectedCategory = () => {
	return useSelector(selectedCategory)
}
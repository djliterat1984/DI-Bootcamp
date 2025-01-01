import React from 'react'
import BookItem from './BookItem';

const BooksList = ( props ) => {
	const { bookList } = props;
	
	return (
		bookList.map( item => {
		return (
			<BookItem item={item}/>
		)
	} )
	)
}

export default BooksList
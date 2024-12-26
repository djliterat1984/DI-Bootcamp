import React from 'react'

const BooksList = ( props ) => {
	const { bookList } = props;
	console.log(bookList);
	
	return (
		bookList.map( item => {
		return (
			<div key={ item.id } style={ { display: 'flex' } }>
				<h5>{item.id}) </h5>
				<h5>{item.title} - </h5>
				<h5>{ item.author} </h5>
				{
					item.genre.map( g => {
						return (
							<h5>- {g}</h5>
						)
					} )
				}
			</div>
		)
	} )
	)
}

export default BooksList
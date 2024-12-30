import React from 'react'

const BooksList = ( props ) => {
	const { bookList } = props;
	
	return (
		bookList.map( item => {
		return (
			<div key={ item.id } style={ { display: 'flex' } }>
				<h5>{item.id}) </h5>
				<h5>{item.title} - </h5>
				<h5>{ item.author} </h5>
				{
					item.genre.map( (g,index) => {
						return (
							<h5 key={index}>- {g}</h5>
						)
					} )
				}
			</div>
		)
	} )
	)
}

export default BooksList
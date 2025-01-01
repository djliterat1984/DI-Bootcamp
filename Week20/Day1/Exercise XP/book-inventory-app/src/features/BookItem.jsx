import React, {memo} from 'react'

const BookItem = ( { item } ) => {
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
}

export default BookItem
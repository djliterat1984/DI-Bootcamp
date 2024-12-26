import genresData from './state/genresData.json';
import { nanoid } from '@reduxjs/toolkit';

const BookSelect = (props) => {
	const genres = genresData;
	const { onSelectBook, selectedValue } = props;
	
	return (
		<select value={selectedValue} onChange={e => onSelectBook(e.target.value)}>
			<option>Select genre....</option>
			{
				genres.map( item => {
					return (
						<option key={nanoid()} value={item} >{item}</option>
					)
				} )
			}
		</select>
	)
}

export default BookSelect
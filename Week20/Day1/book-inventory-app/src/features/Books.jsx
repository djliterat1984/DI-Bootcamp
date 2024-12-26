import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BookSelect from './BookSelect';
import { filterByGenre } from './state/bookSlice';
import BooksList from './BooksList';

const Books = () => {
	const selectBooks = useSelector( state => state.bookReducer.books );
	const filteredBooks = useSelector( state => state.bookReducer.filtered );
	const dispatch = useDispatch();
	
	return (
		<div>
			<h3>books</h3>
			<BookSelect
				selectedValue={ filteredBooks.currentGenre }
				onSelectBook={ ( selectedOption ) => { dispatch( filterByGenre( selectedOption ) ) } }
			/>
			{
				filteredBooks.books.length > 0 ?
					<BooksList bookList={ filteredBooks.books } />
					:
					<BooksList bookList={selectBooks} />
			}	
		</div>
	)
}

export default Books

/*[
    "Fiction",
    "Classic",
    "Dystopian",
    "Science Fiction",
    "Romance",
    "Adventure",
    "Fantasy",
    "Coming-of-age",
    "Magical Realism",
    "Literary Fiction",
    "Historical Fiction",
    "Epic",
    "Mythology",
    "Poetry",
    "Philosophical Fiction",
    "Psychological Fiction",
    "Gothic",
    "Philosophical",
    "Satire",
    "Children's Literature",
    "Fable",
    "War",
    "Social Commentary",
    "Comedy",
    "Feminist Fiction",
    "Mystery",
    "Absurdist Fiction",
    "Existential",
    "Drama",
    "Young Adult",
    "Horror",
    "Nature",
    "Post-Apocalyptic",
    "Historical",
    "Mythopoeia"
]*/ 

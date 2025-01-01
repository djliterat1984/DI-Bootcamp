import React from 'react'
import BookSelect from './BookSelect';
import BooksList from './BooksList';
import { useBooksSelector, useFilterByGenre, useFilteredBooks } from './state/hooks';

const Books = () => {
    const books = useBooksSelector();
    const filteredBooks = useFilteredBooks();
    const callFilterByGenre = useFilterByGenre();
    
	return (
		<div>
			<h3>books</h3>
			<BookSelect
				selectedValue={ filteredBooks.currentGenre }
				onSelectBook={ ( selectedOption ) => { callFilterByGenre(selectedOption) } }
			/>
			{
				filteredBooks.books.length > 0 ?
					<BooksList bookList={ filteredBooks.books } />
					:
					<BooksList bookList={books} />
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

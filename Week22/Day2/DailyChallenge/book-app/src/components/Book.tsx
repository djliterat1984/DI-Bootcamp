import { useEffect, useState, type ReactNode } from 'react';
import List from './List';
import AddBook from './AddBook';
import { mockData } from '../helpers/mockBookData';

export type BookT = {
    id: number;
    title: string;
    author: string;
    publication_year?: number | string;
    genre?: string[];
    description?: string;
    cover_image?: string;
};

const Book = (): ReactNode => {
    const [bookList, setBookList] = useState<BookT[]>([]);

    const loadData = async (): Promise<void> => {
        try {
            const data = mockData;
            setBookList(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect((): void => {
        loadData();
    }, []);

    const addBook = (title: string, author: string): void => {
        console.log(typeof title, typeof author);

        if (title === '' || author === '') {
            alert('You need to complete each field');
            return;
        }

        const exist = bookList.find((book): boolean => book.title.toLowerCase() === title.toLowerCase() && book.author.toLowerCase() === author.toLowerCase());
        if (exist) {
            alert('This book already is in the list');
            return;
        }

        const newBook: BookT = {
            id: bookList.length + 1,
            title,
            author,
        };

        setBookList([...bookList, newBook]);
    };

    const renderItem = (item: BookT): ReactNode => {
        return (
            <div
                key={item.id}
                style={{ border: 'black 2px solid', margin: '10px', padding: '5px', width: '400px' }}>
                <h4 style={{ margin: 0 }}>
                    {item.title} - {item.author}
                </h4>
            </div>
        );
    };

    return (
        <div>
            <AddBook addBook={addBook} />
            <List
                items={bookList}
                renderItem={renderItem}
            />
        </div>
    );
};

export default Book;

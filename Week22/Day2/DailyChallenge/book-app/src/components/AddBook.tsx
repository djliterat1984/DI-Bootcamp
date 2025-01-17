import { useRef, type ReactNode } from 'react';

interface props {
    addBook: (title: string, author: string) => void;
}

const AddBook = ({ addBook }: props): ReactNode => {
    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);

    return (
        <div style={{ margin: '10px' }}>
            <input
                ref={titleRef}
                type='text'
                placeholder='Add Title'
                style={{ margin: '5px' }}
            />
            <input
                ref={authorRef}
                type='text'
                placeholder='Add Author'
                name=''
                id=''
                style={{ margin: '5px' }}
            />
            <button
                onClick={(): void => {
                    addBook(titleRef.current?.value!, authorRef.current?.value!);
                    titleRef.current!.value = '';
                    authorRef.current!.value = '';
                }}
                value='Add'
                style={{ margin: '5px' }}>
                Add Book
            </button>
        </div>
    );
};

export default AddBook;

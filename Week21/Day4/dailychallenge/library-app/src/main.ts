interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?:string
}

class Library {
  constructor(private books:Book[]) {
    this.books = books;
  }
  
  addBook (book:Book): void {
    this.books.push( book );
  }
  
  getBookDetails (book:Book) {
    const selectedBook = this.books.find( b => b.isbn === book.isbn )
    if(selectedBook)
      return `${ selectedBook.title } - ${ selectedBook.author } - ${ selectedBook.publishedYear }`
    return 'Not found'
  }
  
  listBooks () {
    return this.books
  }
}

class DigitalLibrary extends Library{
  constructor(books: Book[], readonly website:string ) {
    super( books )
    this.website = website;
  }
  
  listTitleBooks (): string[]{
    const libBooks = this.listBooks()
    const titleBooks = libBooks.map( book => book.title )
    return titleBooks;
  }
}

const myDigLibrary = new DigitalLibrary( [], 'www.library.com' )
myDigLibrary.addBook( { title: 'Peterpan', author: 'ploni', isbn: '3456547', publishedYear: 2000 } )
myDigLibrary.addBook( { title: 'Superman', author: 'almoni', isbn: '3459320', publishedYear: 2000 } );
myDigLibrary.addBook( { title: 'Batman', author: 'Author', isbn: '34594834', publishedYear: 2000 } );
myDigLibrary.addBook( { title: 'Spiderman', author: 'Spielberg', isbn: '3456232', publishedYear: 2000 } );

myDigLibrary.listBooks().forEach( book => {
  const detailBook = myDigLibrary.getBookDetails( book );
  console.log(detailBook);
} );
const titles = myDigLibrary.listTitleBooks();
console.log(titles);



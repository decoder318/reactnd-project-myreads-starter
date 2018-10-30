import React from 'react' ;
import BooksGrid from './books-grid.component';

const BookShelf = ({shelf, books}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={books} />
            </div>
        </div>
    );
}

export default BookShelf;
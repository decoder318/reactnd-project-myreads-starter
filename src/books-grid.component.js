import React from 'react';
import Book from './book.component';

const BooksGrid = ({books, shelfSwitchCallback}) => {
    if (!(books && books.length)) {
        return '';
    }

    return (
        <ol className="books-grid">
            {
                books.map(book => (
                    <li key={book.id}>
                        <Book bookMetadata = {book} shelfSwitchCallback={shelfSwitchCallback} />
                    </li>
                ))
            }            
        </ol>
    )
};

export default BooksGrid;
import React from 'react';
import Book from './book.component';
import PropTypes from 'prop-types';

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

BooksGrid.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        imageLinks: PropTypes.shape({
            thumbnail: PropTypes.string
        }),
        shelf: PropTypes.string,
        title: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string)
    })),

    shelfSwitchCallback: PropTypes.func
}

export default BooksGrid;
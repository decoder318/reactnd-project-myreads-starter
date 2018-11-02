import React from 'react';
import Book from './book.component';
import SelectBook from './select-book.component';
import PropTypes from 'prop-types';

const BooksGrid = ({books, shelfSwitchCallback, selectBookCallback}) => {
    const onBookSelected = (book) => {
        selectBookCallback && typeof(selectBookCallback) === 'function' && selectBookCallback(book);
    }

    if (!(books && books.length)) {
        return '';
    }

    return (
        <ol className="books-grid">
            {
                books.map(book => (
                    <li key={book.id} className={book.isSelected ? 'book-selected' : ''}>
                        <Book bookMetadata = {book} shelfSwitchCallback={shelfSwitchCallback} />
                        <SelectBook isSelected={book.isSelected} selectBookCallback={() => onBookSelected(book)} />
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
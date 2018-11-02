import React from 'react';
import BookShelfSwitcher from './book-shelf-switcher.component';

const BulkShelfSwitcher = ({booksSelected, shelf, bulkShelfSwitchCallback}) => {

    if(!booksSelected) {
        return '';
    }

    return (
        <div className="bulk-move">
            <span className="selected-books-badge">
                {`${booksSelected} ${booksSelected > 1 ? 'books' : 'book'} selected`}
            </span>
            <BookShelfSwitcher shelf={shelf} shelfSwitchCallback={(toShelf) => bulkShelfSwitchCallback({fromShelf: shelf, toShelf})} />
        </div>
    );
}

export default BulkShelfSwitcher;
import React from 'react';
import BookCover from './book-cover.component';
import BookShelfSwitcher from './book-shelf-switcher.component';

const Book = ({bookMetadata}) => {
    const {imageLinks, shelf, title, authors} = bookMetadata;

    return(
        <div className="book">
            <div className="book-top">
                <BookCover coverUrl={imageLinks.thumbnail} />
                <BookShelfSwitcher shelf={shelf} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
                {
                    authors.join(', ')
                }
            </div>
        </div>
    );
}

export default Book;
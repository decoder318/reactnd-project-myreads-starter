import React from 'react';
import BookCover from './book-cover.component';
import BookShelfSwitcher from './book-shelf-switcher.component';
import * as BooksAPI from './BooksAPI';

const Book = ({bookMetadata, shelfSwitchCallback}) => {
    const {imageLinks, shelf, title, authors} = bookMetadata;

    const onShelfSwitched = (toShelf) => {
        BooksAPI.update(bookMetadata, toShelf)
            .then((res) => {
                console.log(res);
                shelfSwitchCallback(bookMetadata, toShelf, res);
            });
    }

    return(
        <div className="book">
            <div className="book-top">
                <BookCover coverUrl={imageLinks && imageLinks.thumbnail} />
                <BookShelfSwitcher shelf={shelf} shelfSwitchCallback={onShelfSwitched} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
                {
                    authors && authors.join(', ')
                }
            </div>
        </div>
    );
}

export default Book;
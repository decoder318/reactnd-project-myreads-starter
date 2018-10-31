import React, {Component} from 'react';
import BookCover from './book-cover.component';
import BookShelfSwitcher from './book-shelf-switcher.component';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

class Book extends Component {

    onShelfSwitched = (toShelf) => {
        const {bookMetadata, shelfSwitchCallback} = this.props;

        BooksAPI.update(bookMetadata, toShelf)
            .then((res) => {
                shelfSwitchCallback && typeof(shelfSwitchCallback) === 'function' && shelfSwitchCallback(bookMetadata, toShelf, res);
            });
    }

    shouldComponentUpdate(nextProps) {
        const {bookMetadata} = this.props;

        return bookMetadata.id !== nextProps.bookMetadata.id || bookMetadata.shelf !== nextProps.bookMetadata.shelf;
    }

    render() {
        const {bookMetadata} = this.props;
        const {imageLinks, shelf, title, authors} = bookMetadata;
        
        return (
            <div className="book">
                <div className="book-top">
                    <BookCover coverUrl={imageLinks && imageLinks.thumbnail} />
                    <BookShelfSwitcher shelf={shelf || 'none'} shelfSwitchCallback={this.onShelfSwitched} />
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
}

Book.propTypes = {
    bookMetadata: PropTypes.shape({
        imageLinks: PropTypes.shape({
            thumbnail: PropTypes.string
        }),
        shelf: PropTypes.string,
        title: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string)
    })
}

export default Book;
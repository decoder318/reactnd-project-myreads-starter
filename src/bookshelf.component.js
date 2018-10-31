import React from 'react' ;
import BooksGrid from './books-grid.component';

const BookShelf = ({shelf, allBooks, shelfBooks, shelfSwitchCallback}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                {
                    shelfBooks && shelfBooks.length ? 
                        <BooksGrid books={shelfBooks.map(bookId => allBooks[bookId])} shelfSwitchCallback={shelfSwitchCallback} />
                                                    :
                        <div>None at the moment</div>
                }
            </div>
        </div>
    );
}

export default BookShelf;
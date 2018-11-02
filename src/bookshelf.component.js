import React from 'react' ;
import BooksGrid from './books-grid.component';
import BookShelfSwitcher from './book-shelf-switcher.component';

const BookShelf = ({shelf, allBooks, shelfBooks, shelfSwitchCallback, selectBookCallback, bulkShelfSwitchCallback}) => {

    const booksSelected = shelfBooks && shelfBooks
                            .map(bookId => allBooks[bookId])
                            .filter(book => book.isSelected)
                            .length;    

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                {
                    shelfBooks && shelfBooks.length ? 
                        <BooksGrid 
                            books={shelfBooks.map(bookId => allBooks[bookId])} 
                            shelfSwitchCallback={shelfSwitchCallback}
                            selectBookCallback={selectBookCallback} />
                                                    :
                        <div>None at the moment</div>
                }
            </div>

            {
                booksSelected ? 

                <div className="bulk-move">
                    <span className="selected-books-badge">
                        {`${booksSelected} ${booksSelected > 1 ? 'books' : 'book'} selected`}
                    </span>
                    <BookShelfSwitcher shelf={shelf.value} shelfSwitchCallback={(toShelf) => bulkShelfSwitchCallback({fromShelf: shelf.value, toShelf})} />
                </div>

                :

                ''
            }
        </div>
    );
}

export default BookShelf;
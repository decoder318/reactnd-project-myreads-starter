import React from 'react' ;
import BooksGrid from './books-grid.component';
import BulkShelfSwitcher from './bulk-shelf-switcher.component';

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
            <BulkShelfSwitcher 
                shelf={shelf.value} 
                booksSelected={booksSelected} 
                bulkShelfSwitchCallback={bulkShelfSwitchCallback} />
        </div>
    );
}

export default BookShelf;
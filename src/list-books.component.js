import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import {USER_SHELVES} from './shelf-name-values';
import BookShelf from './bookshelf.component';
import {Link} from 'react-router-dom';

class ListBooks extends Component {
    state = {
        allBooks: {},
        shelves: {}
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(books => {
                const allBooks = {}, shelveData = {};

                books.forEach(book => {
                    allBooks[book.id] = book;
                });
                
                USER_SHELVES.forEach(nv => {
                    shelveData[nv.value] = books
                                                .filter(book => book.shelf === nv.value)
                                                .map(book => book.id);
                });

                this.setState({
                    allBooks: allBooks,
                    shelves: shelveData
                });
            });
    }

    shelfSwitchCallback = (book, toShelf, apiRes) => {
        // update the book object to the new shelf, and set state
        // update shelves from api response
        this.setState(prevState => ({
            ...prevState,
            allBooks : {
                ...prevState.allBooks,
                [book.id] : {
                    ...prevState.allBooks[book.id],
                    shelf: toShelf
                }
            },
            shelves : apiRes
        }));
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {
                            USER_SHELVES.map(nv => (
                                <BookShelf key={nv.value} shelf={nv} 
                                    allBooks={this.state.allBooks} 
                                    shelfBooks={this.state.shelves[nv.value]} 
                                    shelfSwitchCallback={this.shelfSwitchCallback} />
                            ))
                        }                
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;
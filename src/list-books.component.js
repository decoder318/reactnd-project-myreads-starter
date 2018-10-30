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
                    shelveData[nv.value] = books.filter(book => book.shelf === nv.value)
                });

                this.setState({
                    allBooks: allBooks,
                    shelves: shelveData
                });
            });
    }

    shelfSwitchCallback = (book, toShelf, apiRes) => {
        const allBooks = this.state.allBooks;
        const shelveData = {};
        const fromShelf = book.shelf;

        Object.keys(apiRes).forEach(shelf => {
            shelveData[shelf] = apiRes[shelf].map(bookId => {
                return this.state.allBooks[bookId]}
            );
        });

        this.setState({
            allBooks: allBooks,
            shelves: shelveData
        });
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
                                <BookShelf key={nv.value} shelf={nv} books={this.state.shelves[nv.value]} shelfSwitchCallback={this.shelfSwitchCallback} />
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
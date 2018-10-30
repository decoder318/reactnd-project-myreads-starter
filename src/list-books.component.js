import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import {USER_SHELVES} from './shelf-name-values';
import BookShelf from './bookshelf.component';

class ListBooks extends Component {
    state = {
        shelves: {}
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(allBooks => {
                const shelveData = {};

                USER_SHELVES.forEach(nv => {
                    shelveData[nv.value] = allBooks.filter(book => book.shelf === nv.value)
                });

                this.setState({
                    shelves: shelveData
                });
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
                                <BookShelf key={nv.value} shelf={nv} books={this.state.shelves[nv.value]} />
                            ))
                        }                
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => {}}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default ListBooks;
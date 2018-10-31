import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import BooksGrid from './books-grid.component';
import SearchBooksBar from './search-books-bar.component';

class SearchBooks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            searchResults: []
        };

        // I am forced to bind the context here, as the callback class member, eventhough defined with the lambda syntax.. 
        // does NOT get the 'this' object when invoked from the child component
        this.searchForBooks = this.searchForBooks.bind(this);
    }

    searchForBooks = (query) => {
        // I don't like doing this, but this inside the promise resolve callback 'then' is being undefined.. 
        // I know something is wrong, cuz the method is defined on the class, with the lambda syntax, and the 'this' object should always be the instance..
        const self = this;

        this.setState({query: query});

        BooksAPI.search(query)
            .then(books => {
                self.setState({searchResults: books})
            })
    };

    shelfSwitchCallback = (bookMetadata, toShelf) => {
        const searchResults = [...this.state.searchResults];
        const index = searchResults.findIndex(book => book.id === bookMetadata.id)

        searchResults.splice(index, 1, {
            ...searchResults[index],
            shelf: toShelf
        });

        this.setState({searchResults: searchResults});
    };

    render() {
        return (
            <div className="search-books">
                <SearchBooksBar onQueryChange={this.searchForBooks} />

                <div className="search-books-results">
                    <BooksGrid books={this.state.searchResults} shelfSwitchCallback={this.shelfSwitchCallback} />
                </div>
            </div>
        );
    }
}

export default SearchBooks;
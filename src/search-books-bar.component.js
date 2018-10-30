import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

const SearchBooksBar = ({onQueryChange}) => {

    const handleChange = (e)=>{

        // debounce the callBack which inturn invokes the API. We don't want too many api requests while the user is typing into the search bar..
        const debouncedSearchCallback = _.debounce(onQueryChange, 400);

        debouncedSearchCallback(e.target.value);
    }

    return (
        <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">                    
                <input type="text"
                    onKeyUp={handleChange}
                    placeholder="Search by title or author"/>
            </div>
        </div>
    );
}

export default SearchBooksBar;
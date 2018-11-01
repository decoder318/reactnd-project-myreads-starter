import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

const SearchBooksBar = ({onQueryChange}) => {

    const handleChange = (e)=>{
        onQueryChange(e.target.value);
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
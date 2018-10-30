import React from 'react';
import {ALL_SHELVES} from './shelf-name-values';

const BookShelfSwitcher = ({shelf}) => {
    return (
        <div className="book-shelf-changer">
            <select value={shelf}>
                <option value="move" disabled>Move to...</option>
                {
                    ALL_SHELVES.map(nv => (
                        <option key={nv.value} value={nv.value}>{nv.name}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default BookShelfSwitcher;
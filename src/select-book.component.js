import React from 'react';

const SelectBook = ({isSelected, selectBookCallback}) => {
    return (
        <div onClick={() => selectBookCallback()} className={`select-book ${isSelected ? 'selected' : ''}`}>&#x2713;</div>
    );
}

export default SelectBook;
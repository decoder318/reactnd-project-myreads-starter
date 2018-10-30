import React from 'react';

const BookCover = ({coverUrl}) => {
    return (
        <div className="book-cover" 
            style={
                { 
                    width: 128, 
                    height: 193, 
                    backgroundImage: `url("${coverUrl}")`
                }
            }>
        </div>
    );
}

export default BookCover;
import React from 'react';
import PropTypes from 'prop-types';

const BookCover = ({coverUrl}) => {
    return (
        <div className="book-cover" 
            style={
                { 
                    width: 128, 
                    height: 193, 
                    backgroundImage: `url("${coverUrl}")`,
                    backgroundSize: 'contain',
                    backgroundColor: '#000',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }
            }>
        </div>
    );
}

BookCover.propTypes = {
    coverUrl: PropTypes.string
};

export default BookCover;
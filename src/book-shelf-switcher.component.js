import React from 'react';
import {ALL_SHELVES} from './shelf-name-values';
import PropTypes from 'prop-types';

const BookShelfSwitcher = ({shelf, shelfSwitchCallback}) => {

    const handleChange = (e) => {
        shelfSwitchCallback(e.target.value);
    }

    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={handleChange}>
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

// const ShelfOption = ({shelfNameValue, isSelected}) => {
//     return (
//         <div className={`shelf-option ${isSelected ? 'selected' : ''}`}>
//             {shelfNameValue.name}
//         </div>
//     );
// }

// class BookShelfSwitcher extends React.Component {

//     state = {
//         isExpanded: false
//     }

//     handleChange = (e) => {
//         const {shelfSwitchCallback} = this.props;
//         e.target.id && shelfSwitchCallback(e.target.id);
//     }

//     render() {
//         const {shelf} = this.props;

//         return (
//             <div className={`book-shelf-changer ${this.state.isExpanded ? 'expanded' : ''}`} onClick={() => this.setState({isExpanded: !this.state.isExpanded})}>
//                 <ul onClick={this.handleChange}>
//                     <li>Move to...</li>
//                     {
//                         ALL_SHELVES.map(nv => (
//                             <li key={nv.value} id={nv.value}> 
//                                 <ShelfOption shelfNameValue={nv} isSelected={shelf === nv.value} />
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

BookShelfSwitcher.propTypes = {
    shelf: PropTypes.string,
    shelfSwitchCallback: PropTypes.func.isRequired
}

export default BookShelfSwitcher;
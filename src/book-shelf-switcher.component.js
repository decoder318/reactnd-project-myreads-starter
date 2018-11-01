import React from 'react';
import {ALL_SHELVES} from './shelf-name-values';
import PropTypes from 'prop-types';

class BookShelfSwitcher extends React.Component {

    state = {
        isExpanded: false
    }

    handleChange = (e) => {
        const {shelfSwitchCallback} = this.props;
        
        e.target.id && shelfSwitchCallback(e.target.id);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.shelf !== nextProps.shelf || this.state.isExpanded !== nextState.isExpanded;
    }

    handleClickOutside = (event) => {
        if (this.refs.shelfSwitchWrapper && !this.refs.shelfSwitchWrapper.contains(event.target) && this.state.isExpanded) {
            this.setState({
                isExpanded: false
            });
        }
    }
    
    handleClick = () => {
        const {shelf, getShelfCallback} = this.props;

        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));

        if (!shelf) {
            getShelfCallback && typeof(getShelfCallback) === 'function' && setTimeout(getShelfCallback, 4);
            return;
        }
    }

    render() {
        const {shelf} = this.props;

        return (
            <div 
                ref="shelfSwitchWrapper"
                className={`book-shelf-changer ${this.state.isExpanded ? 'expanded' : ''}`}
                onClick={this.handleClick}>

                <ul onClick={this.handleChange} className={!shelf ? 'waiting' : ''}>
                    <li className="not-an-option">Move to...</li>
                    {
                        ALL_SHELVES.map(nv => (
                            <li key={nv.value} id={nv.value} className={shelf === nv.value ? 'selected' : ''}>
                                {nv.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }    
}

BookShelfSwitcher.propTypes = {
    shelf: PropTypes.string,
    shelfSwitchCallback: PropTypes.func.isRequired
}

export default BookShelfSwitcher;
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Page404 extends Component {

    state = {
        secondsBeforeRedirect: null
    }

    startTicker = () => {
        if (isNaN(this.state.secondsBeforeRedirect)) {
            return;
        }

        return setInterval(() => {
            this.setState(prevState => ({
                secondsBeforeRedirect: prevState.secondsBeforeRedirect - 1
            }))
        }, 1000);            
    };

    tickerHandle = null;

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.redirectTimeout && prevState.secondsBeforeRedirect === null) {
            return {
                secondsBeforeRedirect: nextProps.redirectTimeout
            }
        }

        return null;
    }

    componentDidMount() {
        const totalSeconds = this.state.secondsBeforeRedirect;

        if (isNaN(totalSeconds)) {
            return;
        }

        this.tickerHandle = this.startTicker();
    }

    componentDidUpdate() {
        if (this.state.secondsBeforeRedirect < 1) {
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
        clearInterval(this.tickerHandle);
    }

    render() {
        return (
            <div className="full-page-content">
                <h1>
                    Apologies, can't find what you're after. <br />                    
                    <small>You will be automatically routed to homepage in {this.state.secondsBeforeRedirect} seconds. </small>
                </h1>
                <br /><br />
                <p>
                    <small>You know an amazing tip??</small> Make sure you type in the right address. Or just go to the home page and navigate where ever.. <small>duh!!</small>
                </p>
                <br /> <br />
                <h3>
                    Click <Link to="/">here</Link> to go to the homepage if you wish.
                </h3>
            </div>
        );
    }
}

export default withRouter(Page404);
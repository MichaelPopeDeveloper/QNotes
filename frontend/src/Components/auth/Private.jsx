import React, { Component } from 'react';
import logo from '../../logo.svg';
import './../../styles/app.css';

class Private extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="text-white">Private Component</h1>
                </header>
            </div>
        );
    }
}

export default Private;
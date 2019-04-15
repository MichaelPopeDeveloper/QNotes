import React, { Component } from 'react';
import Login from '../Login/Login';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import '../../styles/app.css';
import { loginUser } from '../../actions/index';

const mapStateToProps = state => {
    return { state };
  };
  
  function mapDispatchToProps(dispatch) {
    return {
      loginUser: user => dispatch(loginUser(user))
    };
  }

class Home extends Component {
    render() {
        return (
            <div className="App">
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Home!</h1>
                </header> */}
                <Login />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
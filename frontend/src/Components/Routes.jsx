import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Private from './Auth/Private';
import PrivateRoute from './Auth/PrivateRoute';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/index';



const mapStateToProps = state => {
  return { state };
};

function mapDispatchToProps(dispatch) {
  return {
    logout: action => dispatch(logoutUser(action))
  };
}

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false,
    }
  }


  render = () => {
    return (
      <Router>
        {/* <Menu /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute path="/private" component={Private} />
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
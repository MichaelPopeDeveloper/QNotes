import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Home from './Home/Home';
import Private from './auth/PrivateComponent';
import PrivateRoute from './Auth/PrivateRoute';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/index';
import * as axios from 'axios';



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
        <Menu />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/private" component={Private} />
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
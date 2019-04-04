import React, { Component } from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { state };
};


class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }


  render = () => {
    const { component: Component, ...rest } = this.props;
    const { user } = this.props.state;
    return (
      <Route
        {...rest}
        render={(props) =>
          user ? (
            <Component {...props} />
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
        }
      />
    );
  }
}

const PrivateRouteStateless = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}


export default connect(mapStateToProps)(PrivateRoute);
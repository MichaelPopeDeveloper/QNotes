import React, { Component } from 'react';
import logo from '../../logo.svg';
import './../../styles/app.css';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/index';

const mapStateToProps = state => {
  return { state };
};

function mapDispatchToProps(dispatch) {
  return {
    login: action => dispatch(loginUser(action))
  };
}

class Profile extends Component {
    render() {
        return (
            <div className="row">
                <div className="col d-flex flex-column align-items-center">
                    <h1>Notes</h1>
                    <p className="text-secondary pt-0 mt-0">Hello, Michael</p>
                    <ul className="d-flex flex-column justify-content-center align-items-center" id="Notes-Container">
                        <li className="d-flex justify-content-between">
                            <p className="mb-0">Note Title 1</p>
                            <i class="fas fa-ellipsis-h"></i>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
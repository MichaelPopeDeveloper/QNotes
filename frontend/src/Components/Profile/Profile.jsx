import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";
import './../../styles/app.css';
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
                            <Link to="createnote" className="remove-link-style">
                                <p className="mb-0">Note Title 1</p>
                            </Link>
                            <i class="fas fa-ellipsis-h"></i>
                        </li>
                        <li className="d-flex justify-content-between">
                            <Link to="createnote" className="remove-link-style">
                                <p className="mb-0">Note Title 2</p>
                            </Link>
                            <i class="fas fa-ellipsis-h"></i>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
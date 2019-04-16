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

class CreateNote extends Component {
    render() {
        return (
            <div className="row">
                <div className="col d-flex flex-column justify-content-center align-items-center" style={{minHeight: '100vh'}}>
                    <form className="shadow p-5 w-100">
                    <h1 className="text-center">Create A Note</h1>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Title</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title..." />
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Note</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Note..."></textarea>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
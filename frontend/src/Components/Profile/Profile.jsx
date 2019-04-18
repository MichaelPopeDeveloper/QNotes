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
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        console.log(this.props);
    }

    mapNotes = () => {
        const { notes } = this.props.state.user;
        return notes ? notes.map(note => {
            return (
                <li className="d-flex justify-content-between">
                    <Link to="/note/edit" className="remove-link-style">
                        <p className="mb-0">{note.title}</p>
                    </Link>
                    <i class="fas fa-ellipsis-h"></i>
                </li>
            );
        }) : null;
    }

    render() {
        const { username } = this.props.state.user;
     
        return (
            <div className="row">
                <div className="col d-flex flex-column align-items-center">
                    <h1>Notes</h1>
                    <p className="text-secondary pt-0 mt-0">Hello, {username}</p>
                    <Link to="/note/create"><button className="btn btn-primary">Create New Note</button></Link>
                    <ul className="d-flex flex-column justify-content-center align-items-center" id="Notes-Container">
                        {this.mapNotes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
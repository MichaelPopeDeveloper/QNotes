import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import './../../styles/app.css';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/index';

const mapStateToProps = state => {
    return { state };
};

function mapDispatchToProps(dispatch) {
    return {
        update: action => dispatch(updateUser(action))
    };
}

class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            note: '',
        }
    }

    componentWillMount() {
        console.log('component mount props', this.props);
    }


    handleNoteSubmit = (event) => {
        const { title, note } = this.state;
        axios.post('/user/note/create',
            {
                title,
                note,
            })
            .then(result => {
                this.props.update(result.data.user);
                console.log('user should be updated', this.props);
            })
            .catch(error => console.log(error));
    }

    handleTitleChange = (event) => this.setState({ title: event.target.value });

    handleNoteValue = (event) => this.setState({ note: event.target.value });

    render() {
        const { title, note } = this.state;
        return (
            <div className="row">
                <div className="col d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <form className="shadow p-5 w-100" onSubmit={this.handleNoteSubmit}>
                        <h1 className="text-center">Create A Note</h1>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Title</label>
                            <input value={title} onChange={this.handleTitleChange} className="form-control" id="exampleFormControlInput1" placeholder="Title..." />
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Note</label>
                            <textarea onChange={this.handleNoteValue} value={note} className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Note..."></textarea>
                        </div>
                        <Link to="/profile" onClick={this.handleNoteSubmit}>
                            <button className="btn btn-primary">Create Note</button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
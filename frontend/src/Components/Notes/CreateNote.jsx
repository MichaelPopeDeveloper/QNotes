import React, { Component } from 'react';
import logo from '../../logo.svg';
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

    handleNoteSubmit = () => {
        const { title, note } = this.state;
        axios.post('/note/create', 
        {
            title,
            note,
        })
        .then(result => this.props.update(result.data.user));
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
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
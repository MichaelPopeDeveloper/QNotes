import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import './../../styles/app.css';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { updateUser, noteToEdit } from '../../actions/index';

const mapStateToProps = state => {

    return { state };
};

function mapDispatchToProps(dispatch) {
    return {
        updateUser: action => dispatch(updateUser(action)),
        noteToEdit: action => dispatch(noteToEdit(action))
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
        this.setState({ title: this.props.state.noteToEdit.title, note: this.props.state.noteToEdit.note });
    }

    handleTitleChange = (event) => this.setState({ title: event.target.value });

    handleNoteValue = (event) => this.setState({ note: event.target.value });

    handleSubmit = () => {
        const { title, note } = this.state;
        axios.post('/user/note/edit',
        {
                title,
                note,
            }
        )
            .then(result => this.props.updateUser(result.data.user))
            .catch(error => console.log(error));
    }


    render() {
        const { title, note } = this.state;
        return (
            <div className="row">
                <div className="col d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <form className="shadow p-5 w-100" onSubmit={this.handleSubmit}>
                        <h1 className="text-center">Edit Note</h1>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Title</label>
                            <input onChange={this.handleTitleChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title..." value={title} />
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Note</label>
                            <textarea onChange={this.handleNoteValue} className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Note..." value={note}></textarea>
                        </div>
                        <Link to="/profile" onClick={() => {
                            this.handleSubmit();
                            this.props.noteToEdit(false);
                        }}>
                            <button className="btn btn-primary" >Save Note</button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
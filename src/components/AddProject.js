import {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postProject } from '../actions/projectActions';
import Modal from 'react-modal';

class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            projectIdentifier: "",
            openModal: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newProject = {
            title: this.state.title,
            description: this.state.description,
            projectIdentifier: this.state.projectIdentifier
        }
        this.props.postProject(newProject);
        this.setState({
            openModal: false
        });
    }

    handleOpenModal() {
        this.setState({
            openModal: true,
        })
    }

    handleCloseModal() {
        this.setState({
            openModal: false,
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>+NEW PROJECT</button>
                <Modal
                    isOpen={this.state.openModal}
                    onRequestClose={this.handleCloseModal}
                    className="modal-custom" >
                    <h2>Create a new project</h2>
                    <form onSubmit={this.handleSubmit} className="modal-form">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="title"
                                className="form-control"
                                onChange={this.handleChange}
                                placeholder='Title (required)' ></input>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="description"
                                className="form-control"
                                onChange={this.handleChange}
                                placeholder='Description' ></input>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="projectIdentifier"
                                className="form-control"
                                onChange={this.handleChange}
                                placeholder='Project Identifier (4-5 uppercase characters)' ></input>
                        </div>
                        <button type="submit" >Submit</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

AddProject.propType = {
    postProject: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        postProject: (newProject) => {postProject(dispatch, newProject);}
    };
}

export default connect(null, mapDispatchToProps)(AddProject);
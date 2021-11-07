import {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postProject } from '../actions/projectActions';

class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            projectIdentifier: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.postProject(newProject, this.props.history);
    }

    render() {
        return (
            <div className="container-fluid w-50 my-3">
                <h2>Create a new project</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input 
                            type="text" 
                            name="title"
                            className="form-control"
                            onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Project Identifier</label>
                        <input 
                            type="text"
                            name="projectIdentifier"
                            className="form-control"
                            onChange={this.handleChange}></input>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

AddProject.propType = {
    postProject: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        postProject: (newProject, history) => {postProject(dispatch, newProject, history);}
    };
}

export default connect(null, mapDispatchToProps)(AddProject);
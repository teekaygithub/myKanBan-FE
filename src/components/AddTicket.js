import React, {Component} from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { postTicket } from '../actions/ticketActions';
import PropTypes from 'prop-types';

class AddTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            target_date: "",
            openModal: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({
            openModal: true,
        })
    }

    handleCloseModal() {
        this.setState({
            openModal: false,
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newTicket = {
            title: this.state.title,
            description: this.state.description,
            projectId: this.props.PID,
            status: 'TODO',
            target_date: this.state.target_date
        }
        this.props.postTicket(this.props.PID, newTicket);
    }

    render () {
        return (
            <div className="my-3">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleOpenModal} >
                        +ADD TICKET
                </button>
                <Modal
                    isOpen={this.state.openModal}
                    onRequestClose={this.handleCloseModal} >
                        
                    <h2>Create a new ticket for project {this.props.PID}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Title</label>
                            <input 
                                type="text" 
                                name="title"
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.title}
                                required></input>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input 
                                type="text"
                                name="description"
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.description} ></input>
                        </div>
                        <div className="form-group">
                            <label>Completion Date</label>
                            <input 
                                type="date"
                                name="target_date"
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.target_date} ></input>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary" >Submit</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

AddTicket.propTypes = {
    postTicket: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        postTicket: (PID, newTicket) => {postTicket(dispatch, PID, newTicket);}
    };
}

export default connect(null, mapDispatchToProps)(AddTicket);
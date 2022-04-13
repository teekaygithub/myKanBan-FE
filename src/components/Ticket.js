import React, { Component } from 'react';
import Modal from 'react-modal/lib/components/Modal';

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            title: this.props.ticket.title,
            description: this.props.ticket.description,
            target_date: this.props.ticket.target_date,
        }
        this.handleDrag = this.handleDrag.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDrag(e) {
        e.dataTransfer.setData("TID", this.props.ticket.ticketIdentifier);
        e.dataTransfer.setData("PID", this.props.ticket.projectIdentifier);
        e.dataTransfer.setData("key", this.props.ticket.id);
    }

    handleOpenModal() {
        this.setState({
            openModal: true
        });
    }

    handleCloseModal() {
        this.setState({
            openModal: false
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div
                className="ticket"
                draggable={true}
                onDragStart={this.handleDrag}
                id={this.props.ticket.id} >
                <span><strong>{this.props.ticket.ticketIdentifier}</strong></span>
                <span><strong>{this.props.ticket.title}</strong></span>
                <button
                    className="ticket-details-button"
                    onClick={this.handleOpenModal}>View</button>
                <Modal
                    isOpen={this.state.openModal}
                    onRequestClose={this.handleCloseModal}
                    className="modal-custom">
                    <h3>{this.props.ticket.title}</h3>
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.title}
                                placeholder='Title (Required)'
                                required></input>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                onChange={this.handleChange}
                                placeholder='Description'
                                value={this.state.description} ></input>
                        </div>
                        <div className="form-group">
                            <label>Target Completion Date</label>
                            <input
                                type="date"
                                name="target_date"
                                className="form-control"
                                onChange={this.handleChange}
                                placeholder='Target Completion Date (mm/dd/yyyy)'
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

export default Ticket;
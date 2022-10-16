import React, { useState } from 'react';
import Modal from 'react-modal';
import { iTicket } from '../actions/ticketActions';

export interface iTicketProps {
    ticket: iTicket
}

export const Ticket = (props: iTicketProps) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(props.ticket.title);
    const [description, setDescription] = useState<string>(props.ticket.description);
    const [target_date, setTargetDate] = useState<string>(props.ticket.target_date);

    const handleDrag = (e: React.DragEvent) => {
        e.dataTransfer.setData("TID", props.ticket.ticketIdentifier);
        e.dataTransfer.setData("PID", props.ticket.projectIdentifier);
        e.dataTransfer.setData("key", props.ticket.id);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div
            className="ticket"
            draggable={true}
            onDragStart={handleDrag}
            id={props.ticket.id} >
            <span><strong>{props.ticket.ticketIdentifier}</strong></span>
            <span><strong>{props.ticket.title}</strong></span>
            <button
                className="ticket-details-button"
                onClick={openModal}>View</button>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                className="modal-custom">
                <h3>{props.ticket.title}</h3>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder='Title (Required)'
                            required></input>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Description'
                            value={description} ></input>
                    </div>
                    <div className="form-group">
                        <label>Target Completion Date</label>
                        <input
                            type="date"
                            name="target_date"
                            className="form-control"
                            onChange={(e) => setTargetDate(e.target.value)}
                            placeholder='Target Completion Date (mm/dd/yyyy)'
                            value={target_date} ></input>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary" >Submit</button>
                </form>
            </Modal>
        </div>
    );
}
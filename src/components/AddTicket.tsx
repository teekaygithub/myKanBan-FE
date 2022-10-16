import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { postTicket } from '../actions/ticketActions';

export interface iAddTicketProps {
    PID: string
}

export const AddTicket = (props: iAddTicketProps) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [target_date, setTargetDate] = useState<string>("");
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleOpenModal = () => {setModalOpen(true)}
    const handleCloseModal = () => {setModalOpen(false)}
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTicket = {
            title: title,
            description: description,
            projectId: props.PID,
            status: 'TODO',
            target_date: target_date
        }
        postTicket(dispatch, props.PID, newTicket);
        handleCloseModal();
    }

    return (
        <div className="kanban-addticket-button-container">
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleOpenModal} >
                    +ADD TICKET
            </button>
            <Modal
                isOpen={modalOpen}
                onRequestClose={handleCloseModal}
                className="modal-custom" >
                    
                <h2>New ticket for project {props.PID}</h2>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="title"
                            className="form-control"
                            onChange={(e) => {setTitle(e.target.value)}}
                            value={title}
                            placeholder='Title (Required)'
                            required></input>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            onChange={(e) => {setDescription(e.target.value)}}
                            placeholder='Description'
                            value={description} ></input>
                    </div>
                    <div className="form-group">
                        <input 
                            type="date"
                            name="target_date"
                            className="form-control"
                            onChange={(e) => {setTargetDate(e.target.value)}}
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
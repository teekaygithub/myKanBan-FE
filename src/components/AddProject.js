import { postProject } from '../actions/projectActions';
import Modal from 'react-modal';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from './useForm';

function AddProject() {
    const [openModal, setModal] = useState(false);
    const dispatch = useDispatch();
    const { value: title, bind: bindTitle, reset: resetTitle } = useForm('');
    const { value: description, bind: bindDescription, reset: resetDescription } = useForm('');
    const { value: projectIdentifier, bind: bindProjectIdentifier, reset: resetProjectIdentifier } = useForm('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            title: title,
            description: description,
            projectIdentifier: projectIdentifier
        }
        postProject(dispatch, newProject); // Convert to hook
        setModal(false);
        resetTitle();
        resetDescription();
        resetProjectIdentifier();
    }

    return (
        <div>
            <button id="project-add-button" onClick={() => setModal(true)}>+NEW PROJECT</button>
            <Modal
                isOpen={openModal}
                onRequestClose={() => setModal(false)}
                className="modal-custom" >
                <h2>Create a new project</h2>
                <form onSubmit={handleSubmit} className="modal-form">
                    <label>Title *</label>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            {...bindTitle}
                            placeholder='Title (required)'
                            required ></input>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            {...bindDescription}
                            placeholder='Description' ></input>
                    </div>
                    <div className="form-group">
                        <label>Project Identifier *</label>
                        <input
                            type="text"
                            name="projectIdentifier"
                            className="form-control"
                            {...bindProjectIdentifier}
                            placeholder='Project Identifier (4-5 uppercase characters)'
                            required ></input>
                    </div>
                    <button type="submit" >Submit</button>
                </form>
            </Modal>
        </div>
    );
}

export default AddProject;
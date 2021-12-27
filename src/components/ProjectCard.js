import React from 'react';
import {Link} from 'react-router-dom';

var ProjectCard = (props) => {
    const link = "/project/" + props.PID;
    return (
        <>
            <div class="card-header">
                <h2>{props.title}</h2>
            </div>
            <div class="card-footer">
                <Link to={link} class="card-button">Board View</Link>
            </div>
            
        </>
    );
}

export default ProjectCard;
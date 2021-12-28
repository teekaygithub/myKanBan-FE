import React from 'react';
import {Link} from 'react-router-dom';

var ProjectCard = (props) => {
    const link = "/project/" + props.PID;
    return (
        <>
            <div className="card-header">
                <h2>{props.title}</h2>
            </div>
            <div className="card-footer">
                <Link to={link} className="card-button">Board View</Link>
            </div>
            
        </>
    );
}

export default ProjectCard;
import {Link} from 'react-router-dom';

export interface iProjectCardProps {
    id: string,
    title: string,
    description?: string,
    PID: string,
}

export const ProjectCard = (props: iProjectCardProps) => {
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
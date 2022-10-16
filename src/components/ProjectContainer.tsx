import { ProjectCard } from './ProjectCard';
import AddProject from './AddProject';
import { getProjects, iProject } from '../actions/projectActions';
import { Spinner } from './Spinner';
import '../dashboard.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch, AppState } from '../store';
import { ProjectState } from '../reducers/projectReducer';

export const ProjectContainer = (): JSX.Element => {
    const myProjects: ProjectState = useSelector((state: AppState) => state.myprojects);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        // Dispatch action for getting all projects registered to a user
        getProjects(dispatch);
    }, []);

    // List of all the project card elements
    const projectElem = myProjects.projectlist.map((el: iProject, index: number) => {
        return (
            <div key={index} className="project-card">
                <ProjectCard
                    title={el.title}
                    description={el.description}
                    PID={el.projectIdentifier}
                    id={el.id} />
            </div>
        );
    });

    // Show this if user has at least one project
    const projectView = (
        <div className="container">
            <div id="project-banner">
                <h1
                    className="my-3"
                    style={{ textAlign: 'center' }}>
                    Your Active Projects
                </h1>
                <div className="d-flex justify-content-end w-75 my-4">
                    <AddProject />
                </div>
            </div>
            <div
                id="project-container" >
                {projectElem}
            </div>
        </div>
    );

    const projectEmpty = (
        <div className="container">
            <h1>Let's get started with a project!</h1>
            <AddProject />
        </div>
    );

    const loadedView = myProjects.projectlist.length > 0 ? projectView : projectEmpty;
    const loadingView = (
        <div className="dashboard-loading">
            <Spinner />
        </div>
    );

    return (
        <>
            {
                myProjects.loading ? loadingView : loadedView
            }
        </>
    );
}
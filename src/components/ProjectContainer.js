import { Component } from 'react';
import ProjectCard from './ProjectCard';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import Spinner from './Spinner';
import '../dashboard.css';

class ProjectContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProjects();
    }

    render () {
        if (!this.props.myprojects.loading) {
            if (this.props.myprojects.projectlist.length > 0) {
                const projectElem = this.props.myprojects.projectlist.map((el, index) => {
                    return (
                        <div key={index} className="project-card">
                            <ProjectCard 
                                title={el.title} 
                                description={el.description} 
                                PID={el.projectIdentifier}
                                id={el.id}
                                className="my-auto" />
                        </div>
                    );
                });
                return (
                    <div className="container">
                        <div id="project-banner">
                            <h1 
                                className="my-3"
                                style={{textAlign:'center'}}>
                                Your Active Projects
                            </h1>
                            <div className="d-flex justify-content-end w-75 my-4">
                                <Link to="/addproject" className="mr-0 my-auto">
                                    <button>+NEW PROJECT</button>
                                </Link>
                            </div>
                        </div>
                        <div
                            id="project-container" 
                            className="container-fluid 
                                        card-deck 
                                        py-5 
                                        justify-content-center
                                        w-100
                                        mx-auto">
                            {projectElem}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="container">
                        <h1>Let's get started with a project!</h1>
                        <Link to="/addproject" className="mr-0 my-auto">
                            <button className="btn btn-primary">+NEW PROJECT</button>
                        </Link>
                    </div>
                );
            }
        } else {
            return(
                <div className="dashboard-loading">
                    <Spinner />
                </div>
            );
        }
    }
}

ProjectContainer.propTypes = {
    getProjects: PropTypes.func.isRequired,
    myprojects: PropTypes.object.isRequired,
    userauth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    myprojects: state.myprojects,
    userauth: state.userauth
});

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => {getProjects(dispatch);}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
import { Component } from 'react';
import ProjectCard from './ProjectCard';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';

class ProjectContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.userauth.isLoggedIn === false) {
            this.props.history.push("/login");
        }
        this.props.getProjects();
    }

    render () {
        if (!this.props.projects.requestPending) {
            if (this.props.projects.projectlist.length > 0) {
                const projectElem = this.props.projects.projectlist.map((el, index) => {
                    return (
                        <div key={index}>
                            <ProjectCard 
                                title={el.title} 
                                description={el.description} 
                                id={el.id}
                                className="my-auto" />
                        </div>
                    );
                });
                return (
                    <div className="container">
                        <div className="d-flex">
                            <h1 
                                className="my-3"
                                style={{textAlign:'center'}}>
                                Your Active Projects
                            </h1>
                            <div className="d-flex justify-content-end w-75 my-4">
                                <Link to="/addproject" className="mr-0 my-auto">
                                    <button className="btn btn-primary">+NEW PROJECT</button>
                                </Link>
                            </div>
                        </div>
                        <div 
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
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        }
    }
}

ProjectContainer.propTypes = {
    getProjects: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired,
    userauth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    projects: state.projects,
    userauth: state.userauth
});

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => {getProjects(dispatch);}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
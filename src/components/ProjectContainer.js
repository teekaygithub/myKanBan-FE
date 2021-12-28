import { Component } from 'react';
import ProjectCard from './ProjectCard';
import AddProject from './AddProject';
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
                                <AddProject history={this.props.history} />
                            </div>
                        </div>
                        <div
                            id="project-container" >
                            {projectElem}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="container">
                        <h1>Let's get started with a project!</h1>
                        <AddProject />
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
import React, {Component} from 'react';
import Column from './Column';
import AddTicket from './AddTicket';
import '../App.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTickets } from '../actions/projectActions';

class KanBanContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {}
        }
    }

    componentDidMount() {
        const PID = this.props.match.params.id;
        this.setState({
            project: this.props.projects.projectlist.find(p => p.projectIdentifier === PID)
        });
        console.log(this.props.projects);
        this.props.getTickets(PID);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.projects.tickets.length != this.props.projects.tickets.length) {
    //         this.setState({
    //             tickets: this.props.projects.tickets
    //         });
    //     }
    // }

    render () {

        if (this.props.projects.requestPending) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        } else {
            if (this.props.projects.tickets.length > 0) {
                const status = ["TODO", "INPROGRESS", "DONE"];
                const columns = status.map(stat => (<Column tickets={this.props.projects.tickets.filter(x => x.status === stat)} status={stat} />));
                return (
                    <div className="container" id="kanban-container">
                        <div className="d-flex justify-content-around">
                            <h1>
                                Project: {this.state.project ? this.state.project.title: null}
                            </h1>
                            <AddTicket />
                        </div>
                        <div className="column-container row my-5" >
                            {columns}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="d-flex justify-content-center mx-auto">
                        <h1>No ticket found for this project</h1>
                        <AddTicket />
                    </div>
                );
            }
        } 
    }
}

KanBanContainer.propTypes = {
    projects: PropTypes.object.isRequired,
    getTickets: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    projects: state.projects
});

const mapDispatchToProps = (dispatch) => {
    return {
        getTickets: (PID) => {getTickets(dispatch, PID);}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(KanBanContainer);
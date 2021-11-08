import React, {Component} from 'react';
import Column from './Column';
import AddTicket from './AddTicket';
import '../App.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { propTypes } from 'react-bootstrap/esm/Image';
import { getTickets } from '../actions/projectActions';

class KanBanContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            project: {}
        }
    }

    componentDidMount() {
        const PID = this.props.match.params.id;
        this.setState({
            project: this.props.projects.projectlist.find(p => p.projectIdentifier === PID)
        });
        this.props.getTickets(PID);
    }

    render () {

        if (this.props.projects.tickets.length > 0) {
            return (
                <div className="container" id="kanban-container">
                    <div className="d-flex justify-content-around">
                        <h1>
                            Project: {this.state.project.title}
                        </h1>
                        <AddTicket />
                    </div>
                    <div className="column-container row my-5" >
                        <Column tickets={this.state.tickets} title="TODO" />
                        <Column tickets={this.state.tickets} title="INPROGRESS" />
                        <Column tickets={this.state.tickets} title="DONE" />
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
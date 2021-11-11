import React, {Component} from 'react';
import Column from './Column';
import AddTicket from './AddTicket';
import '../App.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTickets } from '../actions/ticketActions';

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
            project: this.props.myprojects.projectlist.find(p => p.projectIdentifier === PID)
        });
        this.props.getTickets(PID);
    }

    render () {
        if (this.props.myprojects.loading) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        } else {
            if (this.props.mytickets.ticketlist.length > 0) {
                const status = ["TODO", "INPROGRESS", "DONE"];
                const columns = status.map(stat => (<Column 
                    tickets={this.props.mytickets.ticketlist.filter(x => x.status === stat)} 
                    status={stat}
                    history={this.props.history} />));
                return (
                    <div className="container" id="kanban-container">
                        <div className="d-flex justify-content-around">
                            <h1>Project: {/*project.title*/}</h1>
                            <AddTicket PID={this.props.match.params.id} />
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
                        <AddTicket PID={this.props.match.params.id} />
                    </div>
                );
            }
        } 
    }
}

KanBanContainer.propTypes = {
    myprojects: PropTypes.object.isRequired,
    mytickets: PropTypes.object.isRequired,
    getTickets: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    myprojects: state.myprojects,
    mytickets: state.mytickets
});

const mapDispatchToProps = (dispatch) => {
    return {
        getTickets: (PID) => {getTickets(dispatch, PID);}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(KanBanContainer);
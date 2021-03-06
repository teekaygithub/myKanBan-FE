import React, {Component} from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTicket } from '../actions/ticketActions';

class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: []
        }
        this.allowDrop = this.allowDrop.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    allowDrop(e) {
        e.preventDefault();
    }

    handleDrop(e) {
        e.preventDefault();
        let data = e.dataTransfer.getData("key");
        let TID = e.dataTransfer.getData('TID');
        let PID = e.dataTransfer.getData('PID');
        let ticket = this.props.mytickets.ticketlist.find(x => x.ticketIdentifier === TID);
        if (e.target.className==="column") {
            e.target.appendChild(document.getElementById(data));
            ticket.status = this.props.status;
            this.props.updateTicket(PID, ticket);
        }
    }

    render () {
        const ticketComponents = this.props.tickets.length > 0 ? 
            this.props.tickets.map((ticket, index) => (
                <Ticket 
                    key={index}
                    ticket={ticket} />
            )) : null;
        return (
            <div 
                className="column"
                onDragOver={this.allowDrop}
                onDrop={this.handleDrop} >
                <h3 className="column-name">
                    {this.props.status}
                </h3>
                {ticketComponents}
            </div>
        );
    }
}

Column.propTypes = {
    myprojects: PropTypes.object.isRequired,
    mytickets: PropTypes.object.isRequired,
    updateTicket: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    myprojects: state.myprojects,
    mytickets: state.mytickets,
    errors: state.userauth.errors
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateTicket: (PID, ticket) => {updateTicket(dispatch, PID, ticket);}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);
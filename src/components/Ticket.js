import React, {Component} from 'react';

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDrag(e) {
        e.dataTransfer.setData("TID", this.props.ticket.ticketIdentifier);
        e.dataTransfer.setData("PID", this.props.ticket.projectIdentifier);
        e.dataTransfer.setData("key", this.props.ticket.id);
    }

    render () {
        return (
            <div
                className="card ticket mx-auto my-2 px-1 py-1"
                draggable={true}
                onDragStart={this.handleDrag}
                id={this.props.ticket.id} >
                <span><strong>{this.props.ticket.ticketIdentifier}</strong></span>
                <span><strong>{this.props.ticket.title}</strong></span>
                <span>Status: {this.props.ticket.status}</span>
            </div>
        );
    }
}

export default Ticket;
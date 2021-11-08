import React, {Component} from 'react';
import Ticket from './Ticket';

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
        let data = e.dataTransfer.getData("Text");
        if (e.target.className==="column") {
            e.target.appendChild(document.getElementById(data));
        }
    }

    render () {
        const ticketComponents = this.props.tickets.length > 0 ? 
            this.props.tickets.map((ticket, index) => (
                <Ticket 
                    key={index}
                    title={ticket.title} 
                    description={ticket.description} 
                    status={ticket.status}
                    ticketid={index} />
            )) : null;
        return (
            <div 
                className="column"
                onDragOver={this.allowDrop}
                onDrop={this.handleDrop} >
                <h3 className="mx-auto py-2">
                    {this.props.status}
                </h3>
                {ticketComponents}
            </div>
        );
    }
}

export default Column;
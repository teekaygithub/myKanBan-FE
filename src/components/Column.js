import { useEffect, useState } from 'react';
import { Ticket } from './Ticket';
import { useSelector, useDispatch } from 'react-redux';
import { updateTicket } from '../actions/ticketActions';

export const Column = (props) => {
    const [tickets, setTickets] = useState([]);
    const allTickets = useSelector((state) => state.mytickets.ticketlist);
    const dispatch = useDispatch();

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("key");
        const TID = e.dataTransfer.getData('TID');
        const PID = e.dataTransfer.getData('PID');
        const ticket = allTickets.find(x => x.ticketIdentifier === TID);
        if (e.target.className === "column") {
            e.target.appendChild(document.getElementById(data));
            ticket.status = props.status;
            updateTicket(dispatch, PID, ticket);
        }
    }

    useEffect(() => {
        if (props.tickets) {
            setTickets(props.tickets)
        }
    }, [tickets])

    const ticketComponents = props.tickets.length > 0 ?
        tickets.map((ticket, index) => (
            <Ticket
                key={index}
                ticket={ticket} />
        )) : null;

    return (
        <div
            className="column"
            onDragOver={allowDrop}
            onDrop={handleDrop} >
            <h3 className="column-name">
                {props.status}
            </h3>
            {ticketComponents}
        </div>
    );
}
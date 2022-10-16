import React, { useEffect, useState } from 'react';
import { Ticket } from './Ticket';
import { useSelector, useDispatch } from 'react-redux';
import { iTicket, updateTicket } from '../actions/ticketActions';
import { AppState } from '../store';

export interface iColumnProps {
    tickets: iTicket[],
    status: string
}

export const Column = (props: iColumnProps) => {
    const [tickets, setTickets] = useState<iTicket[]>([]);
    const allTickets: iTicket[] = useSelector((state: AppState) => state.mytickets.ticketlist);
    const errors: object = useSelector((state: AppState) => state.mytickets.errors);
    const dispatch = useDispatch();

    const allowDrop = (event: React.MouseEvent) => {
        event.preventDefault();
    }

    const handleDrop = (event: React.DragEvent) => {
        event.preventDefault();
        const data = event.dataTransfer!.getData("key");
        const TID = event.dataTransfer!.getData('TID');
        const PID = event.dataTransfer!.getData('PID');
        const ticketObj = allTickets.find(x => x.ticketIdentifier === TID);
        if ((event.target as HTMLDivElement).className === "column") {
            const ticketElement = document.getElementById(data);
            if (ticketElement && ticketObj) {
                (event.target as HTMLDivElement).appendChild(ticketElement);
                ticketObj.status = props.status;
                updateTicket(dispatch, PID, ticketObj);
            } else {
                console.log("Unable to determine ticket element to be dropped: ", ticketObj, ", ", ticketElement);
            }
        }
    }

    useEffect(() => {
        if (props.tickets && props.tickets != tickets) {
            props.tickets.sort((a,b) => {
                return a.ticketIdentifier == b.ticketIdentifier ? 0: 
                a.ticketIdentifier < b.ticketIdentifier ? -1 : 1 });
            setTickets(props.tickets);
        }
    }, [tickets])

    const ticketComponents = tickets.length > 0 ?
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
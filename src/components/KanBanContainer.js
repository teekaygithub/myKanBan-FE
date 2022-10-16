import { useEffect, useState } from 'react';
import { Column } from './Column';
import AddTicket from './AddTicket';
import '../App.css';
import '../kanban.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../actions/ticketActions';
import { getOneProject } from '../actions/projectActions';
import { Spinner } from './Spinner';
import { useHistory } from 'react-router';

export const KanBanContainer = (props) => {
    const [project, setProject] = useState({});
    const myprojects = useSelector((state) => state.myprojects);
    const mytickets = useSelector((state) => state.mytickets);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const PID = props.match.params.id;

        getTickets(dispatch, PID);
        getOneProject(dispatch, PID);
        setProject(myprojects.lastProject);
    }, [project]);

    if (myprojects.loading) {
        return (
            <div style={{ height: "100vh", textAlign: "center" }}>
                <Spinner />
            </div>
        );
    } else {
        if (mytickets.ticketlist.length > 0) {
            const status = {
                "TODO": [],
                "INPROGRESS": [],
                "DONE": []
            }
            // Divide the tickets into separate lists for each status code
            mytickets.ticketlist.forEach((ticket) => {
                status[ticket.status].push(ticket);
            });

            const columns = Object.keys(status).map(stat => <Column
                tickets={status[stat]}
                status={stat}
                history={history} />);
            return (
                <div className="kanban-container">
                    <div className="kanban-top">
                        <div className="kanban-project-name">
                            <h1>Project: {myprojects.lastProject.title}</h1>
                        </div>
                        <AddTicket PID={props.match.params.id} />
                    </div>
                    <div className="column-container" >
                        {columns}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="kanban-container">
                    <h1>No ticket found for this project</h1>
                    <AddTicket PID={props.match.params.id} />
                </div>
            );
        }
    }
}
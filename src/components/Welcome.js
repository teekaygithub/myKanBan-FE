import welcomeImage from '../images/welcome-image.jpg';
import kanbanBoard from "../images/postit-notes.jpg";

// TODO: Replace the current image at 'section-feature-kanban' with a screenshot of my app's kanban
// TODO: Replace the current image 'section-feature-ticket' with a screenshot of my app's screen for adding tickets
let Welcome = () => {
    return (
        <div id="welcome-container">
            <section id="section-banner">
                <div>
                    <h1>Welcome to MyKanBan!</h1>
                    <p>Your very own KanBan board to keep track of your projects</p>
                </div>
                <div>
                    <img src={welcomeImage} 
                        id="main-image"
                        alt="Kanban board example" />
                </div>
            </section>
                        
            <section id="section-feature-kanban">
                <div className="feature-description">
                    <h3>Your progress visualized</h3>
                    <p>Kanban board is a great way to graphically represent the remaining work and the progress of each item.</p>
                </div>
                <div className="feature-image">
                    <img src={kanbanBoard} 
                         alt="Kanban board"
                         className="rounded img-fluid" />
                </div>
            </section>

            <section id="section-feature-ticket">
                <div className="feature-image">
                    <img src={kanbanBoard} 
                         alt="Ticket example"
                         className="rounded img-fluid" />
                </div>
                <div className="feature-description">
                    <h3>Tickets to capture your effort</h3>
                    <p>Keep track of all your remaining work as tickets. There are plenty of fields to capture as many details as you want, or you can be brief and straight to the point. It is up to you!</p>
                </div>
            </section>
        </div>
    );
}

export default Welcome;
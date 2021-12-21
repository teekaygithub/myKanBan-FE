import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div id="footer-socials">
                <p>TBD: Social Media Links</p>
            </div>
            <div id="footer-links">
                <ul>
                    <li>
                        <Link to="/about">About</Link><br />
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
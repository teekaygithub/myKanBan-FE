import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer>
            <div id="footer-socials">
                <p>Social Links</p>
                <div id="footer-social-link-wrapper">
                    <a href="https://www.facebook.com" target="_blank" className="footer-social-link"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.youtube.com" target="_blank" className="footer-social-link"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://www.tiktok.com" target="_blank" className="footer-social-link"><FontAwesomeIcon icon={faTiktok} /></a>
                    <a href="https://www.github.com" target="_blank" className="footer-social-link"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
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
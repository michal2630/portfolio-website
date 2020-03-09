import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
        <footer>
            <div className="footer-icon">
                <a href="https://www.linkedin.com/in/micha%C5%82-michalski-772ab0151/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
                <NavLink exact activeClassName="active" to="/contact">
                    <FontAwesomeIcon icon="envelope" />
                </NavLink>
                <a href="https://github.com/michal2630">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
            </div>
        </footer>
);


export default Footer;
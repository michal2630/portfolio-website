import React from "react";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => (
        <footer>
            <div className="footer-icon">
                <a href="https://www.linkedin.com/in/micha%C5%82-michalski-772ab0151/"><FaLinkedin /></a>
                <NavLink exact activeClassName="active" to="/contact">
                    <MdEmail />
                </NavLink>
                <a href="https://github.com/michal2630"><FaGithub /></a>
            </div>
        </footer>
);


export default Footer;
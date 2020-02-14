import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <React.Fragment>
      <NavLink exact activeClassName="active" to="/">
        Welcome
      </NavLink>
      <NavLink exact activeClassName="active" to="/skills">
        My Work
      </NavLink>
        <NavLink exact activeClassName="active" to="/projects">
        Projects
      </NavLink>
      <NavLink exact activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </React.Fragment>
  );
  
  export default Navbar;
  
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <React.Fragment>
      <NavLink exact activeClassName="active" to="/">
        Hello
      </NavLink>
      <NavLink exact activeClassName="active" to="/technologies">
        Technologies
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
  
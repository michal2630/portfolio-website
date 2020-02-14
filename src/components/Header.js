import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <React.Fragment>
      <NavLink exact activeClassName="active" to="/">
        Welcome
      </NavLink>
      <NavLink exact activeClassName="active" to="/skills">
        My Skills
      </NavLink>
        <NavLink exact activeClassName="active" to="/projects">
        Projects
      </NavLink>
      <NavLink exact activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </React.Fragment>
  );
  
  export default Header;
  
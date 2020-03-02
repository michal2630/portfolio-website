import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <React.Fragment>
      <div className="navBar-wrap">
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
      </div>
    </React.Fragment>
  );
  
  export default Navbar;
  
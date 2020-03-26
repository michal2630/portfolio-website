import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Navbar extends Component {
  state={
    isOpen: false
  }

  handleClick = () => {
    this.setState({
      isOpen:!this.state.isOpen
    })
  }


  closeNavbar = () => {
    this.setState({
      isOpen:false
    })
  }

    render(){
      return(
        <React.Fragment>
          <nav>
            
          <div className="logoBtn">
          <p class="logo">M&M</p>
              <div className="hamburgerBtn" onClick={this.handleClick}> 
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>


            <ul className={this.state.isOpen ? 'showNav' : 'undefined'} >
              <li>
                <NavLink 
                  exact 
                  className="li" 
                  activeClassName="active" 
                  to="/"
                  onClick={this.closeNavbar}
                >
                  Hello
                </NavLink>
              </li>
              <li>
                <NavLink 
                  exact 
                  className="li" 
                  activeClassName="active" 
                  to="/technologies"
                  onClick={this.closeNavbar}
                >
                  Technologies
                </NavLink>
              </li>
              <li>
                <NavLink 
                  exact className="li" 
                  activeClassName="active" 
                  to="/projects"
                  onClick={this.closeNavbar}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  exact 
                  className="li" 
                  activeClassName="active" 
                  to="/contact"
                  onClick={this.closeNavbar}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

          </nav>
        </React.Fragment>
      );
    }
}
  export default Navbar;
  
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.js";

import CreditCounter from "./CreditCounter";
import Payments from "./Payments";
import MobileSidebar from "./MobileSidebar";
import "./Header.css";

class Header extends Component {
  async componentDidMount() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  // react-router Links need to be manually told to dismiss sidebar on click
  handleSidebarClick = () => {
    // these are methods defined in navbar.js of the materialize-css library
    if(M.Sidenav.getInstance(document.querySelector(".sidenav"))) {
      M.Sidenav.getInstance(document.querySelector(".sidenav")).close();
    }
  }

  renderLinks() {
    if (this.props.auth) {
      return (
        <React.Fragment>
          <li onClick={this.handleSidebarClick}>
            <Link to="/surveys">My Surveys</Link>
          </li>
          <li onClick={this.handleSidebarClick}>
            <Link to="/surveys/new">New Survey</Link>
          </li>
          <CreditCounter />
          <li>
            <Payments />
          </li>
          <li>
            <a href="/api/logout" className="waves-effect waves-light" style={{ marginRight: "15px" }}>
              Logout
            </a>
          </li>
        </React.Fragment>
      );
    }
    return (
      <li>
        <a href="/auth/google" className="waves-effect waves-light btn" style={{ marginRight: "15px" }}>
          Signin with Google
        </a>
      </li>
    );
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="brand-logo"
              style={{ marginLeft: "15px", color: "#003f3a", fontFamily: "Pacifico, cursive" }}
            >
              <i className="fas fa-paper-plane"></i>
              Emaily
            </Link>
            <a href="/sidebar" data-target="nav-mobile" className="sidenav-trigger"><i className="fas fa-bars"></i></a>
            <ul className="right hide-on-med-and-down">
              {this.renderLinks()}
            </ul>
          </div>
        </nav>
        <MobileSidebar>
          {this.renderLinks()}
        </MobileSidebar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);

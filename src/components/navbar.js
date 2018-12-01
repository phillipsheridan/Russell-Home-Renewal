import React, { Component } from "react";
// import '../assets/css/nav.css';
import { Link } from "react-router-dom";
import logo from "../assets/img/rhr-png.png";
import Home from "./home";
import About from "./gallery";
import Contact from "./contact";

class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected: "home"
  //   };
  //   this.changeSelected = this.changeSelected.bind(this);
  // }
  // changeSelected(text) {
  //   this.setState({
  //     selected: text
  //   });
  // }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-inverse navbar-dark">
        <div className="container">
          <div className="navbar-brand">
            {/* RHR */}
            <img height="75px" src={logo} alt="Russell Home Renewal logo" />
          </div>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li
                className="nav-item"
                onClick={() => this.props.changeSelected("home")}
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <Link
                  className={`nav-link ${
                    this.props.selected === "home" ? "route-selected" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => this.props.changeSelected("gallery")}
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <Link
                  className={`nav-link ${
                    this.props.selected === "gallery" ? "route-selected" : ""
                  }`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li
                className="nav-item"
                onClick={() => this.props.changeSelected("contact")}
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <Link
                  className={`nav-link ${
                    this.props.selected === "contact" ? "route-selected" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

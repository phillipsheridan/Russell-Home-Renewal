import React, { Component } from 'react';
import '../assets/css/nav.css';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }
    toggleDropdown(e) {
        this.setState({
            isSelected: !this.state.isSelected
        })
    }
    render() {
        const toggleClass =  this.state.isSelected ? 'topnav responsive' : 'topnav';
        return (
            <nav className="navbar">
            <div className="brand"><span className="sensei">RHR</span></div>
            <ul className={toggleClass} id="navbar-toggle">
              <li><Link className="nav-tribar" to="/">Home</Link></li>
              <li><Link className="nav-tribar" to="/about">About</Link></li>
              <li><Link className="nav-tribar" to="/contact">Contact</Link></li>
              <li className="dropdownLink"><a className="hamburger" onClick={this.toggleDropdown} href="javascript:void(0)">&#9776;</a></li>
            </ul>
          </nav>
        );
    }

    
}

export default Navbar;
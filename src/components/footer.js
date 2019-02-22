import React from "react";
import { Link, withRouter } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small indigo">
        <div className="footer">
          <div className="d-inline-flex align-items-center facebook-logo">
            <a href="https://www.facebook.com/Russell-Home-Renewal-1203097386513667/">
              <i className="fab fa-facebook" />
            </a>
          </div>
          <div className="float-right d-inline-flex flex-column align-items-end pt-3 space-evenly">
            <div>
              <h6 className="text-uppercase">
                <div onClick={() => this.props.changeSelected("home")}>
                  <Link to="/">Home</Link>
                </div>
              </h6>
            </div>
            <div>
              <h6 className="text-uppercase">
                <div onClick={() => this.props.changeSelected("gallery")}>
                  <Link to="/gallery">Gallery</Link>
                </div>
              </h6>
            </div>
            <div>
              <h6 className="text-uppercase">
                <div onClick={() => this.props.changeSelected("contact")}>
                  <Link to="/contact">Contact</Link>
                </div>
              </h6>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);

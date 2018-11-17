import React from "react";
import { Link, withRouter } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small indigo">
        <div className="footer">
          <div className="d-flex justify-content-between pt-5 mb-3 space-evenly">
            <div className="flex-item">
              <h6 className="text-uppercase">
                <Link to="/">Home</Link>
              </h6>
            </div>
            <div className="flex-item">
              <h6 className="text-uppercase">
                <Link to="/about">Gallery</Link>
              </h6>
            </div>
            <div className="flex-item">
              <h6 className="text-uppercase">
                <Link to="/contact">Contact</Link>
              </h6>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);

import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small indigo">
        <div classNameName="container">
          <div className="row text-center d-flex justify-content-center pt-5 mb-3">
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/">Home</Link>
              </h6>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/about">Gallery</Link>
              </h6>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="/contact">Contact</Link>
              </h6>
            </div>
          </div>
          <hr className="rgba-white-light" />

          <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
            <div className="col-md-8 col-12 mt-5">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur.
              </p>
            </div>
          </div>
          <hr className="clearfix d-md-none rgba-white-light" />

          <div className="row pb-3 text-center">
            <div className="col-md-12">
              <div className="mb-5 flex-center">
                <a className="fb-ic">
                  <i className="fa fa-facebook fa-lg white-text mr-4"> </i>
                </a>
                <a className="li-ic">
                  <i className="fa fa-linkedin fa-lg white-text mr-4"> </i>
                </a>

                <a className="ins-ic">
                  <i className="fa fa-instagram fa-lg white-text mr-4"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="javascript:void(0)"> RussellHomeRenewal.com</a>
        </div>
      </footer>
    );
  }
}

export default Footer;

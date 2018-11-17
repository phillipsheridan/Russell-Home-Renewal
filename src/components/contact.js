import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

class Contact extends React.Component {
  componentDidMount() {
    // console.log("CONTACT mounted!");
    document.getElementById("root").scrollTo(0, 0);
  }
  onFormSubmit(ev) {
    ev.preventDefault();
  }
  render() {
    return (
      <>
        <div className="container content-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card bg-primary text-center card-form">
                <div className="card-body">
                  <h3>Get a consultation</h3>
                  <p>
                    Please fill out this form and we will get back to you as
                    soon as possible.
                  </p>
                  <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Type of Project"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Comments"
                        rows="5"
                      />
                    </div>
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-outline-light btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="jumbotron my-5 bg-dark m0auto">
              <h5 className="display-4">Contact Us</h5>
              <hr className="my-4" />
              <p className="text-center">Email: russellhomerenewal@gmail.com</p>
              <hr className="my-4" />
              <p className="text-center">Phone: 912-433-6720</p>
              <hr className="my-4" />
              <p className="lead text-center">
                <a
                  className="btn btn-primary btn-lg"
                  href="mailto:russellhomerenewal@gmail.com"
                  role="button"
                >
                  Email now
                </a>
              </p>
              <hr className="my-4" />
              <p className="lead text-center">
                <a
                  className="btn btn-primary btn-lg"
                  href="tel:1-912-433-6720"
                  role="button"
                >
                  Call now
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;

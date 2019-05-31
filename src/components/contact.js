import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    "background-color": "rgba(0,0,0,0.5)",
    zIndex: 101
  },
  content: {
    "background-color": "rgba(3,3,3,1) !important",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "#fff !important"
  }
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      request_data: {
        name: "",
        phone: "",
        email: "",
        project: "",
        comments: ""
      },
      formErrors: { phone: "", email: "", name: "", project: "" },
      emailValid: false,
      phoneValid: false,
      nameValid: false,
      projectValid: false,
      formValid: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    // console.log("CONTACT mounted!");
    document.getElementById("root").scrollTo(0, 0);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  onFormSubmit(ev) {
    ev.preventDefault();
    console.log(this.state.request_data);
    fetch("https://russellhomerenewal.com/api", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.request_data.name,
        email: this.state.request_data.email,
        phone: this.state.request_data.phone,
        project: this.state.request_data.project,
        comments: this.state.request_data.comments
      })
    });

    document.getElementById("emailerForm").reset();
    this.openModal();
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        request_data: {
          ...this.state.request_data,
          [name]: value
        }
      },
      () => {
        this.validateField(name, value);
      }
    );
    // console.log(e.target.value, e.target.name);
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let projectValid = this.state.projectValid;
    let nameValid = this.state.nameValid;
    let phoneValid = this.state.phoneValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid
          ? ""
          : "Please enter a valid email";
        break;
      case "name":
        nameValid = value.length >= 1;
        fieldValidationErrors.name = nameValid ? "" : "Please enter a name";
        break;
      case "project":
        projectValid = value.length >= 1;
        fieldValidationErrors.project = projectValid
          ? ""
          : "Please enter a type of project";
        break;
      case "phone":
        phoneValid = value.match(
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        );
        fieldValidationErrors.phone = phoneValid
          ? ""
          : "Please enter a valid phone number i.e. 555-555-5555";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        projectValid: projectValid,
        phoneValid: phoneValid,
        nameValid: nameValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.phoneValid &&
        this.state.nameValid &&
        this.state.projectValid
    });
  }
  errorClass(error) {
    return error.length === 0 ? "" : "is-invalid";
  }

  render() {
    const asterisk = <span className="red">*</span>;
    const nameAsterisk = this.state.nameValid ? "" : asterisk;
    const phoneAsterisk = this.state.phoneValid ? "" : asterisk;
    const emailAsterisk = this.state.emailValid ? "" : asterisk;
    const projectAsterisk = this.state.projectValid ? "" : asterisk;
    const required = this.state.formValid ? "invisible" : "";
    return (
      <>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1 className="my-modal">
            Thanks! We will reach out to you as soon as possible!
          </h1>
        </Modal>
        <div className="container content-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card contact text-center card-form">
                <div className="card-body">
                  <h3>Get a consultation</h3>
                  <p>
                    Please fill out this form and we will get back to you as
                    soon as possible.
                  </p>
                  <form id="emailerForm" onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                      <label>Name {nameAsterisk}</label>
                      <input
                        onChange={this.handleChange}
                        name="name"
                        type="text"
                        className={`form-control form-control-lg ${this.errorClass(
                          this.state.formErrors.name
                        )}`}
                        placeholder="Name"
                      />
                      <div className="invalid-feedback">
                        {this.state.formErrors.name}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Phone Number{phoneAsterisk}</label>
                      <input
                        onChange={this.handleChange}
                        name="phone"
                        type="text"
                        className={`form-control form-control-lg ${this.errorClass(
                          this.state.formErrors.phone
                        )}`}
                        placeholder="Phone Number"
                      />
                      <div className="invalid-feedback">
                        {this.state.formErrors.phone}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email Address{emailAsterisk}</label>
                      <input
                        onChange={this.handleChange}
                        name="email"
                        type="email"
                        className={`form-control form-control-lg ${this.errorClass(
                          this.state.formErrors.email
                        )}`}
                        placeholder="Email"
                      />
                      <div className="invalid-feedback">
                        {this.state.formErrors.email}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Type of Project{projectAsterisk}</label>
                      <input
                        onChange={this.handleChange}
                        name="project"
                        type="text"
                        className={`form-control form-control-lg ${this.errorClass(
                          this.state.formErrors.project
                        )}`}
                        placeholder="Type of Project"
                      />
                      <div className="invalid-feedback">
                        {this.state.formErrors.project}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Comments</label>
                      <textarea
                        onChange={this.handleChange}
                        name="comments"
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
                      disabled={!this.state.formValid}
                    />
                    <label className={`red mt-5 ${required}`}>* required</label>
                  </form>
                </div>
              </div>
            </div>
            <div className="jumbotron my-5 contact m0auto">
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

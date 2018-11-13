import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

class About extends React.Component {
  componentDidMount() {
    // console.log("GALLERY mounted!");
    document.getElementById("root").scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container content-container">
          <p className="m-5">Below are some recent completed projects.</p>

          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://placeimg.com/640/480/arch"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://placeimg.com/640/480/nature"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://placeimg.com/640/480/arch/grayscale"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default About;

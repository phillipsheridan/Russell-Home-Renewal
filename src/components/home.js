import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";

class Home extends React.Component {
  componentDidMount() {
    // console.log("HOME mounted!");
    document.getElementById("root").scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header />
        <div className="container content-container content-container-home">
          <div className="row home-text">
            <div className="col-sm py-2">
              <h1 className="text-uppercase">WHO WE ARE</h1>
              <hr />
              <p>
                Russell Home Renewal is a fully licensed and insured small
                business serving Savannah, Ga and surrounding areas. We offer a
                variety of services from small repairs to complete remodels.
              </p>
            </div>
            <div className="col-sm py-2">
              <h1 className="text-uppercase">Why Choose Us</h1>
              <hr />
              <p>
                You can leave the work to us. Our goal is to provide a
                stress-free construction experience that most companies can’t
                offer. We are your one stop company for all of your projects.
                Our designers and contractors will turn your house into a home.
              </p>
            </div>
            <div className="col-sm py-2">
              <h1 className="text-uppercase">What we do</h1>
              <hr />
              <p>RHR provides the following services:</p>
              <ul>
                <li>Carpentry</li>
                <li>Painting</li>
                <li>Tile</li>
                <li>Drywall</li>
                <li>Gutters</li>
                <li>Exteriors</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

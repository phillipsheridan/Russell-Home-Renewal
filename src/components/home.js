import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import { Divider } from "@material-ui/core";

class Home extends React.Component {
  componentDidMount() {
    // console.log("HOME mounted!");
    document.getElementById("root").scrollTo(0, 0);
  }
  render() {
    return (
      <div className="d-flex flex-column h-100">
        <div className="d-flex home-container flex-column home-background h-100">
          <Header />
          <div className="container content-container content-container-home align-self-center h-100">
            <div className="row home-text">
              <div className="p-2 w-100">
                <h1 className="text-uppercase">WHO WE ARE</h1>
                <Divider />
                <p>
                  Russell Home Renewal is a fully licensed and insured small
                  business serving Savannah, Ga and surrounding areas. We offer
                  a variety of services from small repairs to complete remodels.
                </p>
              </div>
              <div className="p-2 w-100">
                <h1 className="text-uppercase">Why Choose Us</h1>
                <Divider />
                <p>
                  You can leave the work to us. Our goal is to provide a
                  stress-free construction experience that most companies can’t
                  offer. We are your one stop company for all of your projects.
                  Our designers and contractors will turn your house into a
                  home.
                </p>
              </div>
              <div className="p-2 w-100">
                <h1 className="text-uppercase">What we do</h1>
                <Divider />
                <p>RHR provides the following services:</p>
                <ul className="services">
                  <li className="carpenter">Carpentry</li>
                  <li className="paint">Painting</li>
                  <li className="tile">Tile</li>
                  <li className="drywall">Drywall</li>
                  <li className="gutters">Gutters</li>
                  <li className="exteriors">Exteriors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

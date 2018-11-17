import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PhotoViewer from "./photo_viewer";

class About extends React.Component {
  componentDidMount() {
    // console.log("GALLERY mounted!");
    document.getElementById("root").scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container content-container">
          <h1 className="m-5">
            Below are some recent completed projects, if the image has a
            before/after, you can toggle to see each.
          </h1>

          <PhotoViewer />
        </div>
      </>
    );
  }
}

export default About;

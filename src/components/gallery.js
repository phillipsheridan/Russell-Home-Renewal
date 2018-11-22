import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PhotoViewer from "./photo_viewer";

class Gallery extends React.Component {
  componentDidMount() {
    // console.log("GALLERY mounted!");
    document.getElementById("root").scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container content-container text-center">
          <h1 className="m-5">Gallery</h1>
          <p>
            Below are some recently completed projects, if the image has a
            before/after, you can toggle to see each.
          </p>

          <PhotoViewer />
        </div>
      </>
    );
  }
}

export default Gallery;

import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PhotoViewer from "./photo_viewer";
import panels from "../assets/js/panels";

class Gallery extends React.Component {
  componentDidMount() {
    // console.log("GALLERY mounted!");
    document.getElementById("root").scrollTo(0, 0);
    //just in case they navigate directly here
    panels.forEach(panel => {
      const img1 = new Image();
      img1.src = panel.before;
      if (panel.after) {
        const img2 = new Image();
        img2.src = panel.after;
      }
    });
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

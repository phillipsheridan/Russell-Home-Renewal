import React, { Component } from "react";
import panels from "../assets/js/panels";

class PhotoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBefore: true,
      currentPanel: panels[0],
      currentPanelImg: panels[0].before,
      transition: "beforeAfter"
    };

    this.togglePanelImg = this.togglePanelImg.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  togglePanelImg() {
    console.log(Date.now());
    if (this.state.isBefore) {
      this.setState({
        currentPanelImg: this.state.currentPanel.after,
        isBefore: !this.state.isBefore,
        imageHash: Date.now()
      });
    } else {
      this.setState({
        currentPanelImg: this.state.currentPanel.before,
        isBefore: !this.state.isBefore,
        imageHash: Date.now()
      });
    }
  }

  next() {
    const index = panels.indexOf(this.state.currentPanel);
    if (index < panels.length - 1) {
      //if its not the last img
      this.setState({
        currentPanel: panels[index + 1],
        currentPanelImg: panels[index + 1].before,
        isBefore: true
      });
    } else {
      this.setState({
        currentPanel: panels[0],
        currentPanelImg: panels[0].before,
        isBefore: true
      });
    }
  }

  prev() {
    const index = panels.indexOf(this.state.currentPanel);
    if (index > 0) {
      // console.log(index);
      //if its not the first img
      this.setState({
        currentPanel: panels[index - 1],
        currentPanelImg: panels[index - 1].before,
        isBefore: true
      });
    } else {
      // console.log(index);
      this.setState({
        currentPanel: panels[panels.length - 1],
        currentPanelImg: panels[panels.length - 1].before,
        isBefore: true
      });
    }
  }

  render() {
    let currentImg = (
      <img
        className="photoViewImg beforeAfter"
        src={`${this.state.currentPanelImg}`}
        alt="Home Renewal"
      />
    );
    const isHidden = this.state.currentPanel.id.includes("Waldburg")
      ? "invisible"
      : "";

    const beforeAfter = (
      <div className="d-flex justify-content-around p-3 mx-auto">
        <button onClick={this.prev} className="flex-item btn btn-primary">
          Previous
        </button>
        <button
          onClick={this.togglePanelImg}
          className={`flex-item btn btn-primary ${isHidden}`}
        >
          {this.state.isBefore ? "After" : "Before"}
        </button>
        <button onClick={this.next} className="flex-item btn btn-primary">
          Next
        </button>
      </div>
    );
    return (
      <div className="photoView">
        {currentImg}
        {beforeAfter}
      </div>
    );
  }
}

export default PhotoViewer;

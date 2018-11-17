import React, { Component } from "react";
import panels from "../assets/js/panels";

class PhotoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBefore: true,
      currentPanel: panels[0],
      currentPanelImg: panels[0].before
    };

    this.togglePanelImg = this.togglePanelImg.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount() {
    //preload images
    panels.forEach(panel => {
      const img1 = new Image();
      img1.src = panel.before;
      if (panel.after) {
        const img2 = new Image();
        img2.src = panel.after;
      }
    });
  }

  togglePanelImg() {
    if (this.state.isBefore) {
      this.setState({
        currentPanelImg: this.state.currentPanel.after,
        isBefore: !this.state.isBefore
      });
    } else {
      this.setState({
        currentPanelImg: this.state.currentPanel.before,
        isBefore: !this.state.isBefore
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
    const beforeAfterNoToggle = (
      <div className="d-flex justify-content-around p-3 w-75 m-0 mx-auto">
        <button onClick={this.prev} className="flex-item btn btn-primary">
          Previous
        </button>
        <button onClick={this.next} className="flex-item btn btn-primary">
          Next
        </button>
      </div>
    );
    const beforeAfter = (
      <div className="d-flex justify-content-around p-3 mx-auto">
        <button onClick={this.prev} className="flex-item btn btn-primary">
          Previous
        </button>
        <button
          onClick={this.togglePanelImg}
          className="flex-item btn btn-primary"
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
        <img
          className="photoViewImg"
          src={this.state.currentPanelImg}
          alt="Home Renewal"
        />
        {this.state.currentPanel.id.includes("Waldburg")
          ? beforeAfterNoToggle
          : beforeAfter}
      </div>
    );
  }
}

export default PhotoViewer;

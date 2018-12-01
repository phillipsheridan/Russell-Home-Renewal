import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Gallery from "./gallery";
import Contact from "./contact";
import panels from "../assets/js/panels";

class Layout extends Component {
  constructor(props) {
    console.log(window.location.href);
    const urlArray = window.location.href.split("/");
    let intialSelected = urlArray[urlArray.length - 1];
    const selected =
      intialSelected === "contact" || intialSelected === "gallery"
        ? intialSelected
        : "home";
    super(props);
    this.state = {
      selected: selected
    };
    this.changeSelected = this.changeSelected.bind(this);
  }
  changeSelected(text) {
    this.setState({
      selected: text
    });
  }

  componentDidMount() {
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
      <BrowserRouter>
        <>
          <Navbar
            selected={this.state.selected}
            changeSelected={this.changeSelected}
          />
          <Switch>
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer
            selected={this.state.selected}
            changeSelected={this.changeSelected}
          />
        </>
      </BrowserRouter>
    );
  }
}

export default Layout;

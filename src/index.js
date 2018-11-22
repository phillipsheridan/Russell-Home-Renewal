import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/navbar";
import Header from "./components/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Footer from "./components/footer";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

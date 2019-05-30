import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.scss";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/navbar";
import Header from "./components/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/footer";
import Layout from "./components/layout";

ReactDOM.render(<Layout />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

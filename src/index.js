import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.scss";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/navbar";
import Header from "./components/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, makeStyles, darken } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Layout from "./components/layout";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#303c6c"
    },
    secondary: {
      main: "#d2fdff"
    }
  },
  status: {
    danger: red
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Layout />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

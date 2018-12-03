import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./container/About";
import App from "./container/App.js";

export default (
  <Router>
    <Route exact path="/" componenet={App} />
  </Router>
);

import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import NavBarComponent from "../components/navbar.js";
import FooterComponent from "../components/footer.js";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#0E0B08"
    }
  }
});

const styles = theme => ({
  frame: {
    //maxWidth: "1280px",
    minHeight: "1360px",
    margin: "0 auto",
    borderRadius: "0px",
    backgroundColor: "#120e0a"
  },
  content: {
    marginTop: "56px"
  },
  spacer: {
    padding: "100px 0px"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <BrowserRouter>
            <div>
              <Paper className={classes.frame}>
                <NavBarComponent />
                <div className={classes.content}>
                  <Route exact path="/" component={About} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/contact" component={About} />
                  <Route exact path="/resume" component={Resume} />
                </div>
                <div className={classes.spacer} />
              </Paper>

              <FooterComponent />
            </div>
          </BrowserRouter>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

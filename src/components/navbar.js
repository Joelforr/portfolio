import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import { NavItem } from "./navitem.js";

const styles = theme => ({
  navBar: {
    left: "0px",
    //maxWidth: "1280px",
    height: "56px",
    margin: "0 auto",

    backgroundColor: "#120e0a"
  },
  centerContainer: {
    textAlign: "center",
    margin: "auto"
  },
  center: {
    display: "inline-block"
  },
  navItem: {
    padding: "0 32.5px",

    fontSize: "20px",
    letterSpacing: ".05em",
    textTransform: "uppercase"
  },
  selected: {
    "&$selected": {
      color: "#d67d33"
    }
  }
});

class NavBarComponent extends Component {
  state = {
    selected: ""
  };

  handleClick = event => {
    this.setState({
      selected: event.target.id
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar className={classes.navBar}>
          <div className={classes.centerContainer}>
            <NavItem
              className={classNames(
                classes.center,
                classes.navItem,
                this.state.selected === "about" ? classes.selected : null
              )}
              id="about"
              to="/"
              onClick={this.handleClick}
            >
              About
            </NavItem>
            <NavItem
              className={classNames(
                classes.center,
                classes.navItem,
                this.state.selected === "projects" ? classes.selected : null
              )}
              id="projects"
              to="/projects"
              onClick={this.handleClick}
            >
              Portfolio
            </NavItem>
            <NavItem
              className={classNames(
                classes.center,
                classes.navItem,
                this.state.selected === "resume" ? classes.selected : null
              )}
              id="resume"
              to="/resume"
              onClick={this.handleClick}
            >
              Resume
            </NavItem>
          </div>
        </AppBar>
      </React.Fragment>
    );
  }
}

NavBarComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBarComponent);

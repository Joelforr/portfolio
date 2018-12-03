import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  footer: {
    left: "0px",
    //maxWidth: "1280px",
    height: "80px",
    margin: "0 auto",

    borderRadius: "0px",
    backgroundColor: "#0e0b08"
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
  }
});

class FooterComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.footer} />
      </React.Fragment>
    );
  }
}

FooterComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FooterComponent);

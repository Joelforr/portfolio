import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import "react-image-gallery/styles/css/image-gallery.css";

import projects from "../projectList.js";
import ProjectComponent from "../components/project.js";

const styles = theme => ({
  layout: {
    position: "relative",
    padding: "40px 32px"
  }
});

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.layout}>
          {projects.map(project => (
            <ProjectComponent project={project} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);

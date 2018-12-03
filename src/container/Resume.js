import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import LazyHero from "react-lazy-hero";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import resumeData from "../resumeData.js";

const heroImg = require("../assets/Shoot_VR.jpg");

const styles = theme => ({
  heroImg: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, .25)"
  },
  title: {
    paddingTop: "0px",
    fontSize: "24px",
    textTransform: "uppercase",
    spacing: ".05em",
    color: "#abb1c0"
  },
  grid: {
    marginTop: "80px"
  },
  sectionTitle: {
    fontSize: "36px",
    letterSpacing: "0.05em",
    //textTransform: "uppercase",
    color: "#abb1c0"
  },
  subSectionTitle: {
    fontSize: "20px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#abb1c0"
  },
  listItem: {
    paddingBottom: "0px"
  },
  skill: {
    fontSize: "18px",
    letterSpacing: "0.1em",
    color: "#abb1c0"
  },
  companyContainer: {
    margin: "16px 0px 0px"
  },
  company: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#abb1c0"
  },
  companyDetails: {
    fontSize: "18px",
    color: "#4e4f50"
  },
  jobDescription: {
    margin: "8px 0px 48px",
    fontSize: "18px",
    letterSpacing: "0.005em",
    color: "#abb1c0"
  },
  degree: {
    fontSize: "20px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#abb1c0"
  },
  minor: {
    fontSize: "18px",
    textTransform: "uppercase",
    color: "#4e4f50"
  },
  school: {
    fontSize: "18px",
    fontWeight: 700,
    letterSpacing: "0.005em",
    color: "#abb1c0"
  },
  educationDetails: {
    fontSize: "18px",
    letterSpacing: "0.005em",
    color: "#4e4f50"
  },
  inline: {
    display: "inline"
  }
});

class Resume extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <LazyHero
          imageSrc={heroImg}
          color="#000"
          opacity={0.6}
          minHeight="800px"
          parallaxOffset={0}
          transitionDuration={400}
          className={classes.heroImg}
        />

        {/* SKILLS SECTION */}
        <Grid container className={classes.grid} justify="center" spacing={16}>
          <Grid item xs={2}>
            <Typography className={classes.sectionTitle}>Skills</Typography>
          </Grid>

          <Grid item xs={1} />

          <Grid item xs={2}>
            <Typography className={classes.subSectionTitle}>
              Day-to-Day Comfort
            </Typography>
            <List>
              {resumeData.skills.map(skill => (
                <ListItem className={classes.listItem}>
                  <ListItemText
                    classes={{ primary: classes.skill }}
                    primary={`• ${skill}`}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={1} />

          <Grid item xs={2}>
            <Typography className={classes.subSectionTitle}>
              Experience With
            </Typography>
            <List>
              {resumeData.otherSkills.map(skill => (
                <ListItem className={classes.listItem}>
                  <ListItemText
                    classes={{ primary: classes.skill }}
                    primary={`• ${skill}`}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        {/* WORK EXPERIENCE SECTION */}
        <Grid container className={classes.grid} justify="center" spacing={16}>
          <Grid item xs={2}>
            <Typography className={classes.sectionTitle}>
              Work Experience
            </Typography>
          </Grid>

          <Grid item xs={1} />

          <Grid item xs={5}>
            {resumeData.workExperience.map(experience => (
              <div>
                <Typography className={classes.subSectionTitle}>
                  {experience.title}
                </Typography>
                <div className={classes.companyContainer}>
                  <Typography
                    className={classNames(classes.inline, classes.company)}
                  >
                    {`${experience.company}`}
                  </Typography>

                  <Typography
                    className={classNames(
                      classes.inline,
                      classes.companyDetails
                    )}
                  >
                    {` ${experience.location}`}
                  </Typography>
                  <Typography
                    className={classNames(
                      classes.inline,
                      classes.companyDetails
                    )}
                  >{` ${experience.startDate} - ${
                    experience.endDate
                  }`}</Typography>
                </div>
                <Typography className={classes.jobDescription}>
                  {experience.jobDescription}
                </Typography>
              </div>
            ))}
          </Grid>
        </Grid>

        {/* EDUCATION SECTION */}
        <Grid container className={classes.grid} justify="center" spacing={16}>
          <Grid item xs={2}>
            <Typography className={classes.sectionTitle}>Education</Typography>
          </Grid>

          <Grid item xs={1} />

          <Grid item xs={5}>
            {resumeData.education.map(education => (
              <div>
                <Typography className={classes.degree}>
                  {education.degree}
                </Typography>

                <Typography className={classes.minor}>
                  {education.minor}
                </Typography>

                <div className={classes.companyContainer}>
                  <Typography
                    className={classNames(classes.inline, classes.school)}
                  >
                    {`${education.school}`}
                  </Typography>

                  <Typography
                    className={classNames(
                      classes.inline,
                      classes.educationDetails
                    )}
                  >
                    {` ${education.location}`}
                  </Typography>

                  <Typography
                    className={classNames(
                      classes.inline,
                      classes.educationDetails
                    )}
                  >
                    {` ${education.startDate} - ${education.endDate}`}
                  </Typography>
                </div>
              </div>
            ))}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);

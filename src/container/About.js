import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import LazyHero from "react-lazy-hero";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const heroImg = require("../assets/Shoot_VR.jpg");
const logo = require("../assets/logo.svg");

const styles = theme => ({
  heroImg: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, .25)"
  },
  logo: {
    width: "188px"
  },
  title: {
    paddingTop: "0px",
    fontSize: "24px",
    textTransform: "uppercase",
    spacing: ".05em",
    color: "#abb1c0"
  },
  grid: {
    marginTop: "56px"
  },
  content: {
    padding: "0 15vw"
  },
  aboutTag: {
    fontSize: "24px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#abb1c0"
  },
  aboutTxt: {
    width: "850px",
    margin: "97px 0px 0px 0px",
    paddingBottom: "56px",
    lineHeight: "32px",
    fontSize: "20px",
    letterSpacing: "0.02em",
    color: "#abb1c0"
  },
  contactContainer: {
    paddingBottom: "11px"
  },
  contactTag: {
    color: "#abb1c0",
    fontSize: "17px",
    letterSpacing: "0.01em",
    overflow: "visible"
  },
  contactItem: {
    color: "#abb1c0",
    fontSize: "17px",
    letterSpacing: "0.01em",
    overflow: "visible"
  },
  email: {
    color: "#abb1c0",
    fontSize: "17px",
    textDecoration: "none"
  }
});

class About extends Component {
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
        >
          <div>
            <img className={classes.logo} src={logo} />
          </div>
          <Typography className={classes.title}>
            Game Designer • Developer
          </Typography>
        </LazyHero>

        <Grid container className={classes.grid} justify="center" spacing={16}>
          <Grid item xs={1}>
            <Typography className={classes.aboutTag}>About</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.aboutTxt}>
              Allow me to introduce myself, my name is Joel Forrester. I'm a
              programmer and game designer based in New York City.
              <br />
              <br /> Some fun facts about myself, one of my previous managers
              3D-printed and golden statue of the unique way I sit in chairs
              when focusing, I've climbed to the peak of Mt. Fuji, and I love
              gaming, my favorite series being Kingdom Hearts.
              <br />
              <br /> My passion for gaming led me to game design and my
              profeciency in math and problem solving led me to focus in
              development and programming. Throughout the years I've worked to
              learn as much as I can and improve my skills. I've gone through
              various experiences some of which involvled meeting and working
              with talented people, and some of which not so great. But I love
              my career. Choosing the path of games inspires me and allows me to
              work hard doing things that I enjoy.
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <div className={classes.contactContainer}>
              <Typography className={classes.contactTag} noWrap>
                CONTACT
              </Typography>
            </div>
            <div className={classes.contactContainer}>
              <Typography className={classes.contactTag} noWrap>
                Downlaod Resume:
              </Typography>
              <Typography className={classes.contactItem}>
                <a
                  className={classes.email}
                  href={require("../assets/resume.pdf")}
                  download="JoelForresterResume"
                >
                  PDF
                </a>
              </Typography>
            </div>
            <div className={classes.contactContainer}>
              <Typography className={classes.contactTag}>Mail: </Typography>
              <address>
                <a className={classes.email} href="mailto:joelforr@gmail.com">
                  joelforr@gmail.com
                </a>
              </address>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);

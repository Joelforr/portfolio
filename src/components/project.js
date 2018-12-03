import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const heroImg = require("../assets/Shoot_VR.jpg");

const styles = theme => ({
  layout: {
    position: "relative",
    padding: "40px 30px"
  },
  flexContainer: {
    paddingTop: "64px",
    display: "inline-flex"
  },
  left: {
    order: 1,
    flexGrow: 1
  },
  right: {
    order: 2,
    flexGrow: 1,
    paddingLeft: "29px"
  },
  inline: {
    display: "inline"
  },
  imageGallery: {
    width: "40vw"
  },
  gameTitle: {
    paddingBottom: "30px",
    fontSize: "30px",
    letterSpacing: ".05em",
    textTransform: "uppercase"
  },
  detailContainer: {
    paddingBottom: "11px"
  },
  detailKey: {
    paddingBottom: "11px",
    fontSize: "16px",
    letterSpacing: ".05em",
    textTransform: "uppercase",
    color: "#abb1c0"
  },
  detailValue: {
    paddingLeft: "5px",
    paddingBottom: "11px",
    fontSize: "16px",
    letterSpacing: ".05em",
    textTransform: "uppercase",
    color: "#fff"
  },
  description: {
    textTransform: "none"
  },
  divider: {
    marginTop: "22px",
    height: "3px"
  },
  videoWrapper: {
    position: "relative",
    padding: "33.35% 0px" /* 16:9 */,
    height: "0"
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
});

class ProjectComponent extends Component {
  state = {
    showVideo: {}
  };

  getMedia = () => {
    var mediaArr = [];

    this.props.project.vids.map(vid =>
      mediaArr.push({
        original: `http://img.youtube.com/vi/${vid.vidId}/${vid.thumb}.jpg`,
        thumbnail: `http://img.youtube.com/vi/${vid.vidId}/${vid.thumb}.jpg`,
        renderItem: () => this.renderVideo(vid)
      })
    );

    this.props.project.imgs.map(media =>
      mediaArr.push({
        original: require(`../assets/${media}`),
        thumbnail: require(`../assets/${media}`)
      })
    );
    return mediaArr;
  };

  toggleShowVideo(id) {
    this.state.showVideo[id] = !Boolean(this.state.showVideo[id]);
    this.setState({
      showVideo: this.state.showVideo
    });

    if (this.state.showVideo[id]) {
      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  renderVideo = video => {
    return (
      <div className="image-gallery-content">
        {this.state.showVideo[video.vidId] ? (
          <div className={this.props.classes.videoWrapper}>
            <div className={this.props.classes.video}>{video.ifrm}</div>
          </div>
        ) : (
          <div className={this.props.classes.videoWrapper}>
            <div className={this.props.classes.video}>{video.ifrm}</div>
          </div>
          /* 
          <div>
            <img
              onClick={e => this.toggleShowVideo(video.vidId)}
              src={`http://img.youtube.com/vi/${video.vidId}/${
                video.thumb
              }.jpg`}
            />
          </div> 
          */
        )}
      </div>
    );
  };
  render() {
    const { classes } = this.props;
    const { title, desc, plat, team, role } = this.props.project;

    const images = [
      {
        original: require("../assets/Shoot_VR.jpg"),
        thumbnail: require("../assets/Shoot_VR.jpg")
      },
      {
        thumbnail: "http://lorempixel.com/250/150/nature/3/",
        renderItem: x => (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VWHlPH23P-w"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      },
      {
        original: "http://lorempixel.com/1000/600/nature/3/",
        thumbnail: "http://lorempixel.com/250/150/nature/3/"
      }
    ];

    return (
      <React.Fragment>
        <div className={classes.flexContainer}>
          <div className={classes.left}>
            <div className={classes.imageGallery}>
              <ImageGallery
                items={this.getMedia()}
                showPlayButton={false}
                disableArrowKeys={true}
                showFullscreenButton={false}
              />
            </div>
          </div>
          <div className={classes.right}>
            <Typography className={classes.gameTitle}>{title}</Typography>
            <Typography className={classes.detailKey}>{plat}</Typography>

            <div className={classes.detailContainer}>
              <Typography
                className={classNames(classes.inline, classes.detailKey)}
              >
                Team Size
              </Typography>
              <Typography
                className={classNames(classes.inline, classes.detailValue)}
              >
                | {team}
              </Typography>
            </div>

            <div className={classes.detailContainer}>
              <Typography
                className={classNames(classes.inline, classes.detailKey)}
              >
                Roles
              </Typography>
              <Typography
                className={classNames(classes.inline, classes.detailValue)}
              >
                | {role}
              </Typography>
            </div>

            <div className={classes.detailContainer}>
              <Typography
                className={classNames(classes.inline, classes.detailKey)}
              >
                Description
              </Typography>
              <Typography
                className={classNames(classes.inline, classes.detailValue)}
              >
                |
              </Typography>
            </div>
            <Typography
              className={classNames(classes.detailValue, classes.description)}
            >
              {desc}
            </Typography>
          </div>
        </div>
        <Divider className={classes.divider} />
      </React.Fragment>
    );
  }
}

ProjectComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectComponent);

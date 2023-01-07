import React from "react";
import useStyles from "./indexStyles";
import MenuDesktop from "./desktopMenu";
import MenuMobile from "./mobileMenu";
import { Grid, Hidden } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import programmingLanguage from "../../assets/images/programming-language.jpeg";
export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <MenuDesktop />
      </Hidden>
      <Hidden smUp>
        <MenuMobile />
      </Hidden>
      <Grid container lg={12} className={classes.GridContainer}>
        <Grid item lg={5} className={classes.GridItemLeft}>
          <div className={classes.dinTitle}>
            <h1  className={classes.title}>
              Free <span style={{ color: "#909aac" }}>Online</span> <br />
              <a href="/" style={{ color: "#FA541C" }}>
                Courses
              </a>
              From <br />
              The Export
            </h1>
          </div>
          <div className={classes.divP}>
            <p>
              Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
              sapien, quis venenatis ante odio sit amet eros.
            </p>
          </div>
          <div className={classes.divBtn}>
            <button className={classes.readyStart}>
              Ready Start <ArrowForwardIosIcon className={classes.forwardR} />
            </button>
            <div className={classes.divFab}>
              <SlowMotionVideoIcon
                fontSize="large"
                className={classes.IconVideo}
              />
            </div>
            <h4 className={classes.h5}>Watch Video </h4>
          </div>
          <div className={classes.follower}>
            <div>
              <h1 className={classes.hOne}>14K+</h1>
              <p className={classes.pOne}>Learners</p>
            </div>
            <div>
              <h1 className={classes.hTwo}>1,05K+</h1>
              <p className={classes.pTwo}>Courses</p>
            </div>
            <div>
              <h1 className={classes.hThree}>59K+</h1>
              <p className={classes.pThree}>Graduates</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={7} className={classes.GridItemRight}>
          <img src={programmingLanguage} alt="#" className={classes.Image} />
        </Grid>
      </Grid>
    </div>
  );
}

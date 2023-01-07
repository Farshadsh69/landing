import { Grid } from "@mui/material";
import React from "react";
import useStyles from "./indexStyle";
import programmer from "../../assets/images/programmer.png";
export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h5 className={classes.titleOne}>NULLAM ACCUMSAN LOREM IN DUI.</h5>
      <Grid container lg={12}>
        <Grid item lg={5}>
          <img src={programmer} alt="#" className={classes.ImgProgrammer} />
        </Grid>
        <Grid item lg={7}>
          <div className={classes.divRight}>
            <div className={classes.divTitle}>
              <h1 className={classes.titleTwo}>
             Phasellus gravida semper nisi.Vestibulum rutrum, mi
              </h1>
            </div>
            <div>
              <p className={classes.subtitle}>
                Curabitur a felis in nunc fringilla tristique. Fusce egestas
                elit eget lorem. Etiam vitae tortor. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                hymenaeos.
              </p>
            </div>
            <div  className={classes.subtitle2}>
              <div className={classes.subtitleLeft} >
               <p> Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis
                </p>
              </div>
              <div className={classes.subtitleRight} id="subtitleRight">
                  <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import useStyles from "./indexStyles";
import spotify from "../../assets/images/spotify.png";
import slack from "../../assets/images/slack.png";
import netflix from "../../assets/images/netflix.png";
import heroku from "../../assets/images/heroku.png";
import vimeo from "../../assets/images/Vimeo-Logo.png";
import airbnb from "../../assets/images/airbnb.png";

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>We Work With</h1>
      <p className={classes.p1}>Quisque aliquet, libero consequat elementum convallis.</p>
      <div className={classes.divBrands}>
        <div className={classes.spotify}>
          <img src={spotify} alt="#" className={classes.imgBrand} />
          <h4>Spotify</h4>
        </div>
        <div className={classes.margin}>
          <img src={slack} alt="#" className={classes.slack} />
        </div>
        <div className={classes.margin}>
          <img src={netflix} alt="#" className={classes.netflix} />
        </div>
        <div className={classes.margin}>
          <img src={heroku} alt="#" className={classes.heroku} />
        </div>
        <div className={classes.margin}>
          <img src={vimeo} alt="#" className={classes.vimeo} />
        </div>
        <div className={classes.margin}>
          <img src={airbnb} alt="#" className={classes.airbnb} />
        </div>
      </div>
    </div>
  );
}

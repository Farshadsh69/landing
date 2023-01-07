import React from "react";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./indexStyles.css";
export default function Index() {
  return (
    <div className="divContainer">
      <Grid container className="container">
        <Grid item lg={4} className="GridLeft">
          <h1 className="zone">ZONE</h1>
          <span className="subZone">
            Footer Width 270px Height 72px Top 24px Blend Pass through Fixed
            width Hug contents The starting point for your next project based on
            easy-to-customize Material-UI © helps you build apps faster and
            better.
          </span>
          <div className="divCall">
            <FacebookIcon className="call" />
            <InstagramIcon className="call" />
            <LinkedInIcon className="call" />
            <TwitterIcon className="call" />
          </div>
        </Grid>
        <Grid item lg={4} className="GridBetween">
          <div className="divEmail">
            <MailIcon className="iconEmail" />
            <span className="email">info@example.com</span>
          </div>
          <div className="divEmail">
            <LocationOnIcon className="iconEmail" />
            <span className="email">info@example.com</span>
          </div>
        </Grid>
        <Grid item lg={4} className="GridRight">
          <input placeholder="Email address" className="input" />
          <button className="btn">
            <ChevronRightIcon />
          </button>
        </Grid>
      </Grid>
      <div className="divYear">
        <p className="year"> © 2021. All rights reserved</p>
        <div className="divHelp">
          <p className="help">Help Center</p>
          <p className="service">Terms of Service</p>
        </div>
      </div>
    </div>
  );
}

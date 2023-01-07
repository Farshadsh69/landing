import React from "react";
import useStyles from "./indexStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "../../../assets/images/search.png";
import global from '../../../assets/images/global.png'
import "./indexStyles.css";

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.divMenu}>
        <ul className={classes.ulMenu}>
          <li>
            <a href="/" className="Zone">
              ZONE
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Components</a>
          </li>
          <li className="liPage">
            <a href="/">Page</a>
            <ExpandMoreIcon className="ExpandMoreIcon" />
          </li>
          <li>
            <a href="/">Documentation</a>
          </li>
        </ul>
      </div>
      <div className={classes.divSearch}>
      <img src={SearchIcon} alt="search" className="iconSearch"/>
        <img src={global} alt="global" className="iconGlobal"/>
        <span >|</span>
        <button  className="btnLogin" >Login</button>
        <button  className="btnJoin" >Join us</button>
      </div>
    </div>
  );
}

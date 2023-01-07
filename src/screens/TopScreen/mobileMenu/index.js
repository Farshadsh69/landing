import React, { useState } from "react";
import useStyles from "./indexStyles";
import "./indexStyles.css";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Button } from "@mui/material";

export default function Index() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
        <div className="divMenuIcon">
        <MenuIcon fontSize="large" onClick={toggle} />
        <h3>ZONE</h3>
        </div>
      <Drawer open={open} onClose={toggle}>
      <div className="divBrand">
        <typography className="brand">BRAND</typography>
      </div>
      <div className="List">
      <Button className="btnList" fullWidth variant="contained">
        <List  >
          <ListItemIcon>
            <HomeIcon className="Icon" />
          </ListItemIcon>
          <ListItemText primary="Home" className="textIcon" />
        </List>
        </Button>
        <Button className="btnList" fullWidth variant="contained">
        <List  >
          <ListItemIcon>
            <CollectionsBookmarkIcon className="Icon" />
          </ListItemIcon>
          <ListItemText primary="Components" className="textIcon" />
        </List>
        </Button>
        <Button className="btnList" fullWidth variant="contained">
        <List  >
          <ListItemIcon>
            <PlagiarismIcon className="Icon" />
          </ListItemIcon>
          <ListItemText primary="Page" className="textIcon" />
        </List>
        </Button>
        <Button className="btnList" fullWidth variant="contained">
        <List  >
          <ListItemIcon>
            <AssignmentIcon className="Icon" />
          </ListItemIcon>
          <ListItemText primary="Documentation" className="textIcon" />
        </List>
        </Button>
        </div>
      </Drawer>
    </div>
  );
}

/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, School, SchoolOutlined, SchoolSharp, SchoolTwoTone, Edit, EditAttributes } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <School className={classes.icons} /> Find Minors
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Edit className={classes.icons} /> Admin Console
        </Button>
      </ListItem>
    </List>
  );
}

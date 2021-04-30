import React, { useState, useEffect } from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SnackbarContent from "components/Snackbar/SnackbarContent.js";

export default function SectionStudent() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [isResultShown, setResultShown] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openins, setOpenins] = React.useState(false);
  const [openupd, setOpenupd] = React.useState(false);
  const [opendel, setOpendel] = React.useState(false);
  const [opensearch, setOpensearch] = React.useState(false);

  const [isStudent, setisStudent] = useState(true);
  const [isCourse, setisCourse] = useState(true);
  const [isProgram, setisProgram] = useState(true);
  const [isStaff, setisStaff] = useState(true);
  const [isDepartment, setisDepartment] = useState(true);

  const [alert, setAlert] = React.useState(false);

  const handleChange = e => setValue(e.target.value);

  const handleClick = () => {
    if (value == '') { 
      alert('Please select a table')
      return
    }
    setResultShown(true)
  };
  const handleInsert = () => {
    setOpenins(true);
  };
  const handleInsClose = () => {
    setOpenins(false);
  };
  const handleUpdate = () => {
    setOpenupd(true);
  };
  const handleUpdClose = () => {
    setOpenupd(false);
  };
  const handleDelete = () => {
    setOpendel(true);
  };
  const handleDelClose = () => {
    setOpendel(false);
  };
  const handleSearch = () => {
    setOpensearch(true);
  };
  const handleSeaClose = () => {
    setOpensearch(false);
  };

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Table Select</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              <br />
              <small>Select a table to perform CRUD operations on</small>
            </h3>
            <FormControl style={{minWidth: 150}} variant="outlined" className={classes.formControl}>
              <InputLabel id="select-table-name">Table Name</InputLabel>
              <Select
              onChange={handleChange}
              >
              <MenuItem value={"Student"}>Student</MenuItem>
              <MenuItem value={"Program"}>Program</MenuItem>
              <MenuItem value={"Course"}>Course</MenuItem>
              <MenuItem value={"Department"}>Department</MenuItem>
              <MenuItem value={"Staff"}>Staff</MenuItem>
              </Select>
              </FormControl>
              <h4>You Selected: {value}</h4>
              <GridContainer justify="center">
              <GridItem >
              <Button onClick={handleClick} color="success">Submit choice</Button>
            </GridItem>
          </GridContainer>
          {isResultShown && <div className={classes.root}>
          <GridContainer spacing={2}>
            <GridItem >
              <Button onClick={handleInsert} color="primary" round>Insert</Button>
              {openins && <div className={classes.root}>
                <Dialog open={openins} onClose={handleInsClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title"></DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      What would you like to insert?
                      </DialogContentText>
                      <TextField
                      autoFocus
                      margin="normal"
                      id="netid"
                      label="NetID"
                      type="text"
                      fullWidth
                      />
                      <TextField
                      autoFocus
                      margin="normal"
                      id="name"
                      label="Name"
                      type="text"
                      fullWidth
                      />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleInsClose} color="success">Ok</Button>
                        <Button onClick={handleInsClose} color="warning">Cancel</Button>
                        </DialogActions>
                        </Dialog>
                        </div>}
                        <Button onClick={handleUpdate} color="info" round>Update</Button>
                        {openupd && <div className={classes.root}>
                          <Dialog open={openupd} onClose={handleUpdClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title"></DialogTitle>
                            <DialogContent>
                              <DialogContentText>Enter the NetID you would like to update and then the new NetID</DialogContentText>
                              <TextField
                              autoFocus
                              margin="normal"
                              id="netid"
                              label="Old NetID"
                              type="text"
                              fullWidth
                            />
                            <TextField
                              autoFocus
                              margin="normal"
                              id="netid"
                              label="New NetID"
                              type="text"
                              fullWidth
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleUpdClose} color="success">Ok</Button>
                            <Button onClick={handleUpdClose} color="warning">Cancel</Button>
                            </DialogActions>
                            </Dialog>
                          </div>}
                          <Button onClick={handleDelete} color="danger" round>Delete</Button>
                          {opendel && <div className={classes.root}>
                          <Dialog open={opendel} onClose={handleDelClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title"></DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                What would you like to delete?
                              </DialogContentText>
                              <TextField
                              autoFocus
                              margin="normal"
                              id="netid"
                              label="NetID"
                              type="text"
                              fullWidth
                            />
                            <TextField
                              autoFocus
                              margin="normal"
                              id="name"
                              label="Name"
                              type="text"
                              fullWidth
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleDelClose} color="success">Ok</Button>
                            <Button onClick={handleDelClose} color="warning">Cancel</Button>
                            </DialogActions>
                            </Dialog>
                          </div>}
                          <Button onClick={handleSearch} color="warning" round>Search</Button>
                          {opensearch && <div className={classes.root}>
                          <Dialog open={opensearch} onClose={handleSeaClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title"></DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                Enter the NetID you would like to search
                              </DialogContentText>
                              <TextField
                              autoFocus
                              margin="normal"
                              id="netid"
                              label="NetID"
                              type="text"
                              fullWidth
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleSeaClose} color="success">Ok</Button>
                            <Button onClick={handleSeaClose} color="warning">Cancel</Button>
                            </DialogActions>
                            </Dialog>
                          </div>}
                          <Button color="rose" round>Advance Search</Button>
                          </GridItem>
                      </GridContainer>
                      </div>}
          </div>
          </div>
          </div>
          </div>
  );
}

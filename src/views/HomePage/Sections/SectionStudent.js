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

const useStyles = makeStyles(styles);
let textInput = React.createRef();
function toDo() {
  alert(textInput.current.value)
}

export default function SectionStudent() {
  const schoolclasses = ["CS374", "CS456", "CSfie"]
  let classOptions = schoolclasses.map((values, index) => ({
    key: index,
    text: values,
    value: values
  }));
  const [NetId, setNetId] = useState("");
  const [NetId2, setNetId2] = useState("");
  const [isResultShown, setResultShown] = useState(false);
  const [edu, setEdu] = useState(null);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [schoolCourses, setSchoolCourses] = React.useState([...classOptions])


  
  const handleAddClass = (newValue) => {
    if(newValue == null) {
      return
    }
    if (NetId == '') {
      alert('Please enter a NetId')
      return
    }
    let val = newValue[0].text
    const newItems = [...edu]
    newItems.indexOf(val) == -1 ? newItems.push(val) : console.log("This item already exists");
    setEdu(newItems)
  }

  const handleClick = () => {
    if (NetId == '') {
      alert('Please enter a NetId')
      return
    }
    setEdu(["CS374", "CS241", "Hurray"])
    setNetId2(NetId)
    setResultShown(true)
  }

  const deleteButton = (i) => {
    const newItems = [...edu]
    newItems.splice(i, 1)
    setEdu(newItems)
  }
  function generate() {
    return edu.map((value, i) =>
      React.cloneElement(<ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={value}
          secondary={secondary ? "Secondary text" : null}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => deleteButton(i)} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>, {
        key: { i },
      }),
    );
  }

  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Student</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              Load Student
              <br />
              <small>Enter NetID to check if you are in the system</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                value={NetId}
                labelText="NetId"
                inputProps={{
                  onChange: (newid) => setNetId(newid.target.value)

                }}
                name="NetId"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={10} sm={10} md={8}>
              <Button onClick={handleClick} color="warning">Get Student Info</Button>
            </GridItem>
          </GridContainer>
          {isResultShown && <div className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                  Classes for {NetId2}
                </Typography>
                <div className={classes.demo}>
                  <List dense={dense}>
                    {generate()}
                  </List>
                </div>
              </Grid>
            </Grid>
            <GridItem xs={10} sm={10} md={8}>
              <CustomInput
                value={NetId}
                labelText="NetId"
                inputProps={{
                  onChange: (newid) => setNetId(newid.target.value)

                }}
                name="AddNewClass"
                formControlProps={{
                  fullWidth: true
                }}
              />
              <Button onClick={handleAddClass} color="success">Add Classes</Button>
              <Button onClick={handleClick} color="info">Save to {NetId2}</Button>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={schoolCourses}
                onChange={(event, newValue) => handleAddClass(newValue)}
                getOptionLabel={(option) => option.text}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="filterSelectedOptions"
                    placeholder="Favorites"
                  />
                )}
              />
            </GridItem>


          </div>}
        </div>
      </div>
    </div>
  );
}

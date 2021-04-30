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

import Axios from 'axios';

export default function SectionStudent() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [value1, setValue1] = React.useState('');
    const [isResultShownstu, setResultShownstu] = useState(false);
    const [isResultShownpro, setResultShownpro] = useState(false);
    const [isResultShowncou, setResultShowncou] = useState(false);
    const [isResultShowndep, setResultShowndep] = useState(false);
    const [isResultShownsta, setResultShownsta] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [openins, setOpenins] = React.useState(false);
    const [openupd, setOpenupd] = React.useState(false);
    const [opendel, setOpendel] = React.useState(false);
    const [opensearch, setOpensearch] = React.useState(false);

    const handleChange = e => setValue(e.target.value);


    //Student CRUD
    const [insdisplayresultstu, setinsresultstu] = useState(false);
    const [upddisplayresultstu, setupdresultstu] = useState(false);
    const [delddisplayresultstu, setdelresultstu] = useState(false);
    const [seaddisplayresultstu, setsearesultstu] = useState(false);


    const [stunetid, setstunetid] = useState('');
    const [stuname, setstuname] = useState('');
    const [oldstunid, setoldstunid] = useState('');
    const [oldstuname, setoldstuname] = useState('');
    const [newstuname, setnewstuname] = useState('');
    const [stunetiddel, setstunetiddel] = useState('');
    const [stunamedel, setstunamedel] = useState('');
    const [seastunetid, setstunetidsea] = useState('');
  
    const handlestunid = snid => setstunetid(snid.target.value);
    const handlestuname = sname => setstuname(sname.target.value);
    const handlestuoldup = osnid => setoldstunid(osnid.target.value);
    const handlestuoldupname = osname => setoldstuname(osname.target.value);
    const handlestunewupname = nname => setnewstuname(nname.target.value);
    const handlestudnid = dsnid => setstunetiddel(dsnid.target.value);
    const handlestudname = dsname => setstunamedel(dsname.target.value);
    const handlestusnid = ssnid => setstunetidsea(ssnid.target.value);

    //Student (Prithiv)
    const getStudent = () => {
        Axios.post('http://localhost:3002/api/getStudent', {
            NetID: NetID
        }).then((result) => {
          alert(JSON.stringify(result.data).replace(/[\\r]/g, ''))
        })
      };
    
      const addStudent = () => { 
        Axios.post('http://localhost:3002/api/insertStudent', {
            NetID: NetID,
            Student_Name: Student_Name
        }).then(() => {
          alert('successful insertion')
        })
      };  
    
      const deleteStudent = () => {
        Axios.post('http://localhost:3002/api/deleteStudent', {
            NetID: NetID
        }).then(() => {
          alert('successful deletion')
        })
      };
    
      const updateStudent = () => {
        Axios.post(`http://localhost:3002/api/updateStudent`, {
            NetID: NetID,
            Student_Name: Student_Name
        }).then(() => {
          alert('successful update')
        })
      };
      
      const countRequires = () => {
        Axios.post('http://localhost:3002/api/countRequires', {
            NetID: NetID
        }).then((result) => {
          alert(JSON.stringify(result.data))
        })
      };
    

    //Program CRUD
    const [insdisplayresultpro, setinsresultpro] = useState(false);
    const [upddisplayresultpro, setupdresultpro] = useState(false);
    const [delddisplayresultpro, setdelresultpro] = useState(false);
    const [seaddisplayresultpro, setsearesultpro] = useState(false);


    const [proid, setproid] = useState('');
    const [proname, setproname] = useState('');
    const [protype, setprotype] = useState('');
    const [proch, setproch] = useState('');
    const [prosr, setprosr] = useState('');
    const [oldproid, setoldproid] = useState('');
    const [newproid, setnewproid] = useState('');
    const [proiddel, setproiddel] = useState('');
    const [pronamedel, setpronamedel] = useState('');
    const [protypedel, setprotypedel] = useState('');
    const [prochdel, setprochdel] = useState('');
    const [prosrdel, setprosrdel] = useState('');
    const [proidsea, setproidsea] = useState('');
  
    const handleproid = pid => setproid(pid.target.value);
    const handleproname = pname => setproname(pname.target.value);
    const handleprotype = ptype => setprotype(ptype.target.value);
    const handleproch = pch => setproch(pch.target.value);
    const handleprosr = psr => setprosr(psr.target.value);
    const handleoldproid = opid => setoldproid(opid.target.value);
    const handlenewproid = npid => setnewproid(npid.target.value);
    const handleproiddel = piddel => setproiddel(piddel.target.value);
    const handlepronamedel = pnamedel => setpronamedel(pnamedel.target.value);
    const handleprotypedel = ptypedel => setprotypedel(ptypedel.target.value);
    const handleprochdel = pchdel => setprochdel(pchdel.target.value);
    const handleprosrdel = psrdel => setprosrdel(psrdel.target.value);
    const handleproidsea = pids => setproidsea(pids.target.value);

    //Course CRUD
    const [insdisplayresultcou, setinsresultcou] = useState(false);
    const [upddisplayresultcou, setupdresultcou] = useState(false);
    const [delddisplayresultcou, setdelresultcou] = useState(false);
    const [seaddisplayresultcpu, setsearesultcou] = useState(false);


    const [couname, setcouname] = useState('');
    const [coucrn, setcoucrn] = useState('');
    const [couch, setcouch] = useState('');
    const [oldcoucrn, setoldcoucrn] = useState('');
    const [newcoucrn, setnewcoucrn] = useState('');
    const [counamedel, setcounamedel] = useState('');
    const [coucrndel, setcoucrndel] = useState('');
    const [couchdel, setcouchdel] = useState('');
    const [coucrnsea, setcoucrnsea] = useState('');
  
    const handlecouname = cname => setcouname(cname.target.value);
    const handlecoucrn = ccrn => setcoucrn(ccrn.target.value);
    const handlecouch = cch => setcouch(cch.target.value);
    const handleoldcou = ocid => setoldcoucrn(ocid.target.value);
    const handlenewcou = ncid => setnewcoucrn(ncid.target.value);
    const handlecounamed = dcname => setcounamedel(dcname.target.value);
    const handlecoucrnd = dcid => setcoucrndel(dcid.target.value);
    const handlecouchd = dcch => setcouchdel(dcch.target.value);
    const handlecoucrns = sccrn => setcoucrnsea(sccrn.target.value);

    
    //Department CRUD
    const [insdisplayresultdep, setinsresultdep] = useState(false);
    const [upddisplayresultdep, setupdresultdep] = useState(false);
    const [delddisplayresultdep, setdelresultdep] = useState(false);
    const [seaddisplayresultdep, setsearesultdep] = useState(false);


    const [depname, setdepname] = useState('');
    const [depid, setdepid] = useState('');
    const [depadv, setdepadv] = useState('');
    const [olddepid, setolddepid] = useState('');
    const [newdepid, setnewdepid] = useState('');
    const [depnamedel, setdepnamedel] = useState('');
    const [depiddel, setdepiddel] = useState('');
    const [depadvdel, setdepadvdel] = useState('');
    const [depidsea, setdepidsea] = useState('');
  
    const handledepname = dname => setdepname(dname.target.value);
    const handledepid = did => setdepid(did.target.value);
    const handledepadv = dadv => setdepadv(dadv.target.value);
    const handleolddepid = odid => setolddepid(odid.target.value);
    const handlenewdepid = ndid => setnewdepid(ndid.target.value);
    const handledepnamed = ddname => setdepnamedel(ddname.target.value);
    const handledepidd = ddid => setdepiddel(ddid.target.value);
    const handledepadvd = ddadv => setdepadvdel(ddadv.target.value);
    const handledepids = sdid => setdepidsea(sdid.target.value);

   
    //Staff CRUD
    const [insdisplayresultsta, setinsresultsta] = useState(false);
    const [upddisplayresultsta, setupdresultsta] = useState(false);
    const [delddisplayresultsta, setdelresultsta] = useState(false);
    const [seaddisplayresultsta, setsearesultsta] = useState(false);


    const [staname, setstaname] = useState('');
    const [staid, setstaid] = useState('');
    const [stapos, setstapos] = useState('');
    const [oldstaid, setoldstaid] = useState('');
    const [newstaid, setnewstaid] = useState('');
    const [stanamedel, setstanamedel] = useState('');
    const [staiddel, setstaiddel] = useState('');
    const [staposdel, setstaposdel] = useState('');
    const [staidsea, setstaidsea] = useState('');
  
    const handlestaname = sname => setstaname(sname.target.value);
    const handlestaid = sid => setstaid(sid.target.value);
    const handlestapos = spos => setstapos(spos.target.value);
    const handleoldstaid = osid => setoldstaid(osid.target.value);
    const handlenewstaid = nsid => setnewstaid(nsid.target.value);
    const handlestanamed = dsname => setstanamedel(dsname.target.value);
    const handlestaidd = dsid => setstaiddel(dsid.target.value);
    const handlestaposd = dspos => setstaposdel(dspos.target.value);
    const handlestaids = ssid => setstaidsea(ssid.target.value);


    const handleClick = () => {
        setinsresultstu(false);
        setupdresultstu(false);
        setdelresultstu(false);
        setsearesultstu(false);

        setinsresultpro(false);
        setupdresultpro(false);
        setdelresultpro(false);
        setsearesultpro(false);

        setinsresultcou(false);
        setupdresultcou(false);
        setdelresultcou(false);
        setsearesultcou(false);

        setinsresultdep(false);
        setupdresultdep(false);
        setdelresultdep(false);
        setsearesultdep(false);

        setinsresultsta(false);
        setupdresultsta(false);
        setdelresultsta(false);
        setsearesultsta(false);
      if (value == '') { 
        return
      }
      setValue1(value)
      if (value == 'Student') {
          setResultShownstu(true)
          setResultShownpro(false)
          setResultShowncou(false)
          setResultShowndep(false)
          setResultShownsta(false)
      }
      if (value == 'Program') {
        setResultShownstu(false)
        setResultShownpro(true)
        setResultShowncou(false)
        setResultShowndep(false)
        setResultShownsta(false)
    }
    if (value == 'Course') {
        setResultShownstu(false)
        setResultShownpro(false)
        setResultShowncou(true)
        setResultShowndep(false)
        setResultShownsta(false)
    }
    if (value == 'Department') {
        setResultShownstu(false)
        setResultShownpro(false)
        setResultShowncou(false)
        setResultShowndep(true)
        setResultShownsta(false)
    }
    if (value == 'Staff') {
        setResultShownstu(false)
        setResultShownpro(false)
        setResultShowncou(false)
        setResultShowndep(false)
        setResultShownsta(true)
    }
    };
    const handleInsert = () => {
      setOpenins(true);

      //Student
      setinsresultstu(false);
      setupdresultstu(false);
      setdelresultstu(false)
      setsearesultstu(false)

      //Program
      setinsresultpro(false)
      setupdresultpro(false)
      setdelresultpro(false)
      setsearesultpro(false)

      //Course
      setinsresultcou(false);
      setupdresultcou(false);
      setdelresultcou(false)
      setsearesultcou(false)

      //Department
      setinsresultdep(false);
      setupdresultdep(false);
      setdelresultdep(false)
      setsearesultdep(false)

      //Staff
      setinsresultsta(false);
      setupdresultsta(false);
      setdelresultsta(false)
      setsearesultsta(false)
    };
    const handleInsClose = () => {
        setOpenins(false);

        //Student
        setinsresultstu(true);
        setupdresultstu(false);
        setdelresultstu(false)
        setsearesultstu(false)
        
        //Program
        setinsresultpro(true)
        setupdresultpro(false)
        setdelresultpro(false)
        setsearesultpro(false)

        //Course
        setinsresultcou(true);
        setupdresultcou(false);
        setdelresultcou(false)
        setsearesultcou(false)

        //Department
        setinsresultdep(true);
        setupdresultdep(false);
        setdelresultdep(false)
        setsearesultdep(false)

        //Staff
        setinsresultsta(true);
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
    };
    const handleInsClose1 = () => {
        setOpenins(false);

        //Student
        setinsresultstu(false)
        setupdresultstu(false);
        setdelresultstu(false)
        setsearesultstu(false)

        //Program
        setinsresultpro(false)
        setupdresultpro(false)
        setdelresultpro(false)
        setsearesultpro(false)
        

        //Course
        setinsresultcou(false);
        setupdresultcou(false);
        setdelresultcou(false)
        setsearesultcou(false)

        //Department
        setinsresultdep(false);
        setupdresultdep(false);
        setdelresultdep(false)
        setsearesultdep(false)

        //Staff
        setinsresultsta(false);
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
    };
    const handleUpdate = () => {
        setOpenupd(true);
        
        //Student
        setinsresultstu(false)
        setupdresultstu(false);
        setdelresultstu(false)
        setsearesultstu(false)

        //Program
        setinsresultpro(false)
        setupdresultpro(false)
        setdelresultpro(false)
        setsearesultpro(false)
        
        //Course
        setinsresultcou(false);
        setupdresultcou(false);
        setdelresultcou(false)
        setsearesultcou(false)

        //Department
        setinsresultdep(false);
        setupdresultdep(false);
        setdelresultdep(false)
        setsearesultdep(false)

        //Staff
        setinsresultsta(false);
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
    };
    const handleUpdClose = () => {
        setOpenupd(false);

        //Student
        setinsresultstu(false)
        setupdresultstu(true);
        setdelresultstu(false)
        setsearesultstu(false)

        //Program
        setinsresultpro(false)
        setupdresultpro(true)
        setdelresultpro(false)
        setsearesultpro(false)
        
        //Course
        setinsresultcou(false);
        setupdresultcou(true);
        setdelresultcou(false)
        setsearesultcou(false)

        //Department
        setinsresultdep(false);
        setupdresultdep(true);
        setdelresultdep(false)
        setsearesultdep(false)

        //Staff
        setinsresultsta(false);
        setupdresultsta(true);
        setdelresultsta(false)
        setsearesultsta(false)
    };
    const handleUpdClose1 = () => {
        setOpenupd(false);

        //Student
        setinsresultstu(false)
        setupdresultstu(false);
        setdelresultstu(false)
        setsearesultstu(false)

        //Program
        setinsresultpro(false)
        setupdresultpro(false)
        setdelresultpro(false)
        setsearesultpro(false)
        
        //Course
        setinsresultcou(false);
        setupdresultcou(false);
        setdelresultcou(false)
        setsearesultcou(false)

        //Department
        setinsresultdep(false);
        setupdresultdep(false);
        setdelresultdep(false)
        setsearesultdep(false)

        //Staff
        setinsresultsta(false);
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
    };
    const handleDelete = () => {
        setOpendel(true);

        //Student
        setinsresultstu(false)
        setupdresultstu(false);
        setdelresultstu(false)
        setsearesultstu(false)

        //Program
        setinsresultpro(false)
        setupdresultpro(false)
        setdelresultpro(false)
        setsearesultpro(false)

        //Course
        setinsresultcou(false);
        setupdresultcou(false);
        setdelresultcou(false)
        setsearesultcou(false)

        //Department
        setinsresultdep(false);
        setupdresultdep(false);
        setdelresultdep(false)
        setsearesultdep(false)

        //Staff
        setinsresultsta(false);
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
    };
    const handleDelClose = () => {
        setOpendel(false);

        //Student
        setinsresultstu(false)
        setupdresultstu(false);
        setdelresultstu(true)
        setsearesultstu(false)

        //Program
        setinsresultpro(false)
        setupdresultpro(false)
        setdelresultpro(true)
        setsearesultpro(false)
        
        //Course
        setinsresultcou(false);
        setupdresultcou(false);
        setdelresultcou(true)
        setsearesultcou(false)

        //Department
        setinsresultdep(false);
        setupdresultdep(false);
        setdelresultdep(true)
        setsearesultdep(false)

        //Staff
        setinsresultsta(false);
        setupdresultsta(false);
        setdelresultsta(true)
        setsearesultsta(false)
    };
    const handleDelClose1 = () => {
        setOpendel(false);
        
        //Student
        setinsresultstu(false)
        setupdresultstu(false);
        setdelresultstu(false)
        setsearesultstu(false)

        //Program
        setinsresultpro(false)
        setupdresultpro(false)
        setdelresultpro(false)
        setsearesultpro(false)
        
        //Course
        setinsresultcou(false);
        setupdresultcou(false);
        setdelresultcou(false)
        setsearesultcou(false)

        //Department
        setinsresultdep(false);
        setupdresultdep(false);
        setdelresultdep(false)
        setsearesultdep(false)

        //Staff
        setinsresultsta(false);
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
    };
    const handleSearch = () => {
        setOpensearch(true);

        //Student
        setinsresultstu(false)
        setupdresultstu(false);
        setdelresultstu(false)
        setsearesultstu(false)

        //Program
        setinsresultpro(false)
        setupdresultpro(false)
        setdelresultpro(false)
        setsearesultpro(false)
        
        //Course
        setinsresultcou(false);
        setupdresultcou(false);
        setdelresultcou(false)
        setsearesultcou(false)

        //Department
        setinsresultdep(false);
        setupdresultdep(false);
        setdelresultdep(false)
        setsearesultdep(false)

        //Staff
        setinsresultsta(false);
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
    };
    const handleSeaClose = () => {
        setOpensearch(false);

        //Student
        setinsresultstu(false);
        setupdresultstu(false);
        setdelresultstu(false);
        setsearesultstu(true)

        //Program
        setinsresultpro(false)
        setupdresultpro(false)
        setdelresultpro(false)
        setsearesultpro(true)
        
        //Course
        setinsresultcou(false);
        setupdresultcou(false);
        setdelresultcou(false)
        setsearesultcou(true)

        //Department
        setinsresultdep(false);
        setupdresultdep(false);
        setdelresultdep(false)
        setsearesultdep(true)

        //Staff
        setinsresultsta(false);
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(true)
    };
    const handleSeaClose1 = () => {
        setOpensearch(false);

        //Student
        setinsresultstu(false);
        setupdresultstu(false);
        setdelresultstu(false);
        setsearesultstu(false)

        //Program
        setinsresultpro(false)
        setupdresultpro(false)
        setdelresultpro(false)
        setsearesultpro(false)
        
        //Course
        setinsresultcou(false);
        setupdresultcou(false);
        setdelresultcou(false)
        setsearesultcou(false)

        //Department
        setinsresultdep(false);
        setupdresultdep(false);
        setdelresultdep(false)
        setsearesultdep(false)

        //Staff
        setinsresultsta(false);
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
    };
    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>Table Select</h2>
                </div>
                <div id="buttons">
                    <div className={classes.title}>
                        <h3><br/><small>Select a table to perform CRUD operations on</small></h3>
                        <FormControl style={{minWidth: 150}} variant="outlined" className={classes.formControl}>
                            <InputLabel id="select-table-name">Table Name</InputLabel>
                            <Select onChange={handleChange}>
                                <MenuItem value={"Student"}>Student</MenuItem>
                                <MenuItem value={"Program"}>Program</MenuItem>
                                <MenuItem value={"Course"}>Course</MenuItem>
                                <MenuItem value={"Department"}>Department</MenuItem>
                                <MenuItem value={"Staff"}>Staff</MenuItem>
                            </Select>
                        </FormControl>
                        <GridContainer justify="center">
                            <GridItem >
                                <Button onClick={handleClick} color="success">Submit choice</Button>
                                <h4>You Selected: {value1}</h4>
                            </GridItem>
                        </GridContainer>
                        {isResultShownstu && <div className={classes.root}>
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
                                                <TextField onChange={handlestunid}
                                                autoFocus
                                                margin="normal"
                                                value={stunetid}
                                                label="NetID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlestuname}
                                                autoFocus
                                                margin="normal"
                                                value={stuname}
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={addStudent, handleInsClose} color="success">Ok</Button>
                                                <Button onClick={handleInsClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {insdisplayresultstu && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Insert: NetId - {stunetid} and Name - {stuname}</h4>
                                                </Typography>
                                    </div>}
                                    <Button onClick={handleUpdate} color="info" round>Update</Button>
                                    {openupd && <div className={classes.root}>
                                        <Dialog open={openupd} onClose={handleUpdClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>Enter the NetID of the student whose name you would like to update and then the new name</DialogContentText>
                                                <TextField onChange={handlestuoldup}
                                                autoFocus
                                                margin="normal"
                                                value={oldstunid}
                                                label="NetID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlestuoldupname}
                                                autoFocus
                                                margin="normal"
                                                value={oldstuname}
                                                label="Old Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlestunewupname}
                                                autoFocus
                                                margin="normal"
                                                value={newstuname}
                                                label="New Name"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleUpdClose} color="success">Ok</Button>
                                                <Button onClick={handleUpdClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {upddisplayresultstu && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Update: NetId - {oldstunid}, Old Name - {oldstuname} and New Name - {newstuname}</h4>
                                                </Typography>
                                    </div>}
                                    <Button onClick={handleDelete} color="danger" round>Delete</Button>
                                    {opendel && <div className={classes.root}>
                                        <Dialog open={opendel} onClose={handleDelClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    What would you like to delete?
                                                </DialogContentText>
                                                <TextField onChange ={handlestudnid}
                                                autoFocus
                                                margin="normal"
                                                value={stunetiddel}
                                                label="NetID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlestudname}
                                                autoFocus
                                                margin="normal"
                                                value={stunamedel}
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleDelClose} color="success">Ok</Button>
                                                <Button onClick={handleDelClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {delddisplayresultstu && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Delete: NetId - {stunetiddel} and Name - {stunamedel}</h4>
                                                </Typography>
                                    </div>}
                                    <Button onClick={handleSearch} color="warning" round>Search</Button>
                                    {opensearch && <div className={classes.root}>
                                        <Dialog open={opensearch} onClose={handleSeaClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Enter the NetID you would like to search
                                                </DialogContentText>
                                                <TextField onChange={handlestusnid}
                                                autoFocus
                                                margin="normal"
                                                value={seastunetid}
                                                label="NetID"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleSeaClose} color="success">Ok</Button>
                                                <Button onClick={handleSeaClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                            </Dialog>
                                            </div>}
                                            {seaddisplayresultstu && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Search: NetId - {seastunetid} </h4>
                                                </Typography>
                                            </div>}
                                            <Button color="rose" round>Advance Search</Button>
                                </GridItem>
                            </GridContainer>
                        </div>}
                        {isResultShownpro && <div className={classes.root}>
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
                                                <TextField onChange={handleproname}
                                                autoFocus
                                                margin="normal"
                                                value={proname}
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleproch}
                                                autoFocus
                                                margin="normal"
                                                value={proch}
                                                label="Required credit hours"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleprotype}
                                                autoFocus
                                                margin="normal"
                                                value={protype}
                                                label="Type (Major/Minor)"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleproid}
                                                autoFocus
                                                margin="normal"
                                                value={proid}
                                                label="Program ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleprosr}
                                                autoFocus
                                                margin="normal"
                                                value={prosr}
                                                label="Special requirements"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleInsClose} color="success">Ok</Button>
                                                <Button onClick={handleInsClose1} color="warning">Cancel</Button>
                                                </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {insdisplayresultpro && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Insert: Program Name - {proname}, Program Type - {protype}, Program ID - {proid}, Req Credit Hours - {proch} and Special requirements - {prosr}</h4>
                                                </Typography>
                                    </div>}
                                    <Button onClick={handleUpdate} color="info" round>Update</Button>
                                    {openupd && <div className={classes.root}>
                                        <Dialog open={openupd} onClose={handleUpdClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>Enter the Program ID you would like to update and then the new Program ID</DialogContentText>
                                                <TextField onChange={handleoldproid}
                                                autoFocus
                                                margin="normal"
                                                value={oldproid}
                                                label="Old Program ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlenewproid}
                                                autoFocus
                                                margin="normal"
                                                value={newproid}
                                                label="New Program ID"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleUpdClose} color="success">Ok</Button>
                                                <Button onClick={handleUpdClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {upddisplayresultpro && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Update: Old Program ID - {oldproid}, New Program ID - {newproid}</h4>
                                                </Typography>
                                    </div>}
                                    <Button onClick={handleDelete} color="danger" round>Delete</Button>
                                    {opendel && <div className={classes.root}>
                                        <Dialog open={opendel} onClose={handleDelClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    What would you like to delete?
                                                </DialogContentText>
                                                <TextField onChange={handlepronamedel}
                                                autoFocus
                                                margin="normal"
                                                id="name"
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleprochdel}
                                                autoFocus
                                                margin="normal"
                                                id="ch"
                                                label="Required credit hours"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleprotypedel}
                                                autoFocus
                                                margin="normal"
                                                id="type"
                                                label="Type (Major/Minor)"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleproiddel}
                                                autoFocus
                                                margin="normal"
                                                id="pid"
                                                label="Program ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleprosrdel}
                                                autoFocus
                                                margin="normal"
                                                id="spec_req"
                                                label="Special requirements"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleDelClose} color="success">Ok</Button>
                                                <Button onClick={handleDelClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {delddisplayresultpro && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Delete: Program Name - {pronamedel}, Program Type - {protypedel}, Program ID - {proiddel}, Req Credit Hours - {prochdel} and Special requirements - {prosrdel}</h4>
                                                </Typography>
                                    </div>}
                                    <Button onClick={handleSearch} color="warning" round>Search</Button>
                                    {opensearch && <div className={classes.root}>
                                        <Dialog open={opensearch} onClose={handleSeaClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Enter the Program ID you would like to search
                                                </DialogContentText>
                                                <TextField onChange={handleproidsea}
                                                autoFocus
                                                margin="normal"
                                                value={proidsea}
                                                label="Program ID"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleSeaClose} color="success">Ok</Button>
                                                <Button onClick={handleSeaClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                            </Dialog>
                                            </div>}
                                            {seaddisplayresultpro && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Search: Program ID - {proidsea}</h4>
                                                </Typography>
                                        </div>}
                                            <Button color="rose" round>Advance Search</Button>
                                </GridItem>
                            </GridContainer>
                        </div>}
                        {isResultShowncou && <div className={classes.root}>
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
                                                <TextField onChange={handlecouname}
                                                autoFocus
                                                margin="normal"
                                                value={couname}
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlecoucrn}
                                                autoFocus
                                                margin="normal"
                                                value={coucrn}
                                                label="CRN"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlecouch}
                                                autoFocus
                                                margin="normal"
                                                value={couch}
                                                label="Credit Hours"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleInsClose} color="success">Ok</Button>
                                                <Button onClick={handleInsClose1} color="warning">Cancel</Button>
                                                </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {insdisplayresultcou && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Insert: Course Name - {couname}, Course CRN - {coucrn} and Credit hours - {couch}</h4>
                                                </Typography>
                                        </div>}
                                    <Button onClick={handleUpdate} color="info" round>Update</Button>
                                    {openupd && <div className={classes.root}>
                                        <Dialog open={openupd} onClose={handleUpdClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>Enter the Course CRN you would like to update and then the new Course CRN</DialogContentText>
                                                <TextField onChange={handleoldcou}
                                                autoFocus
                                                margin="normal"
                                                value={oldcoucrn}
                                                label="Old Course CRN"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlenewcou}
                                                autoFocus
                                                margin="normal"
                                                value={newcoucrn}
                                                label="New Course CRN"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleUpdClose} color="success">Ok</Button>
                                                <Button onClick={handleUpdClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {upddisplayresultcou && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Update: Old course CRN - {oldcoucrn}, New Course CRN - {newcoucrn}</h4>
                                                </Typography>
                                        </div>}
                                    <Button onClick={handleDelete} color="danger" round>Delete</Button>
                                    {opendel && <div className={classes.root}>
                                        <Dialog open={opendel} onClose={handleDelClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    What would you like to delete?
                                                </DialogContentText>
                                                <TextField onChange={handlecounamed}
                                                autoFocus
                                                margin="normal"
                                                value={counamedel}
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlecoucrnd}
                                                autoFocus 
                                                margin="normal"
                                                value={coucrndel}
                                                label="CRN"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlecouchd}
                                                autoFocus
                                                margin="normal"
                                                value={couchdel}
                                                label="Credit Hours"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleDelClose} color="success">Ok</Button>
                                                <Button onClick={handleDelClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {delddisplayresultcou && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Delete: Course Name - {counamedel}, Course CRN - {coucrndel} and Credit hours - {couchdel}</h4>
                                                </Typography>
                                        </div>}
                                    <Button onClick={handleSearch} color="warning" round>Search</Button>
                                    {opensearch && <div className={classes.root}>
                                        <Dialog open={opensearch} onClose={handleSeaClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Enter the Course CRN you would like to search
                                                </DialogContentText>
                                                <TextField onChange={handlecoucrns}
                                                autoFocus
                                                margin="normal"
                                                value={coucrnsea}
                                                label="Course CRN"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleSeaClose} color="success">Ok</Button>
                                                <Button onClick={handleSeaClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                            </Dialog>
                                            </div>}
                                            {seaddisplayresultcpu && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Search: Course CRN - {coucrnsea}</h4>
                                                </Typography>
                                        </div>}
                                            <Button color="rose" round>Advance Search</Button>
                                </GridItem>
                            </GridContainer>
                        </div>}
                        {isResultShowndep && <div className={classes.root}>
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
                                                <TextField onChange={handledepname}
                                                autoFocus
                                                margin="normal"
                                                value={depname}
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handledepid}
                                                autoFocus
                                                margin="normal"
                                                value={depid}
                                                label="Department ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handledepadv}
                                                autoFocus
                                                margin="normal"
                                                value={depadv}
                                                label="Advisor"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleInsClose} color="success">Ok</Button>
                                                <Button onClick={handleInsClose1} color="warning">Cancel</Button>
                                                </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {insdisplayresultdep && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Insert: Department name - {depname}, Department ID - {depid} and Department Advisor - {depadv}</h4>
                                                </Typography>
                                        </div>}
                                    <Button onClick={handleUpdate} color="info" round>Update</Button>
                                    {openupd && <div className={classes.root}>
                                        <Dialog open={openupd} onClose={handleUpdClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>Enter the Department ID you would like to update and then the new Department ID</DialogContentText>
                                                <TextField onChange={handleolddepid}
                                                autoFocus
                                                margin="normal"
                                                value={olddepid}
                                                label="Old Department ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlenewdepid}
                                                autoFocus
                                                margin="normal"
                                                value={newdepid}
                                                label="New Department ID"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleUpdClose} color="success">Ok</Button>
                                                <Button onClick={handleUpdClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {upddisplayresultdep && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Update: Old Department ID - {olddepid} and New Department ID - {newdepid}</h4>
                                                </Typography>
                                        </div>}
                                    <Button onClick={handleDelete} color="danger" round>Delete</Button>
                                    {opendel && <div className={classes.root}>
                                        <Dialog open={opendel} onClose={handleDelClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    What would you like to delete?
                                                </DialogContentText>
                                                <TextField onChange={handledepnamed}
                                                autoFocus
                                                margin="normal"
                                                value={depnamedel}
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handledepidd}
                                                autoFocus
                                                margin="normal"
                                                value={depiddel}
                                                label="Department ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handledepadvd}
                                                autoFocus
                                                margin="normal"
                                                value={depadvdel}
                                                label="Advisor"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleDelClose} color="success">Ok</Button>
                                                <Button onClick={handleDelClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {delddisplayresultdep && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Delete: Department name - {depnamedel}, Department ID - {depiddel} and Department Advisor - {depadvdel}</h4>
                                                </Typography>
                                        </div>}
                                    <Button onClick={handleSearch} color="warning" round>Search</Button>
                                    {opensearch && <div className={classes.root}>
                                        <Dialog open={opensearch} onClose={handleSeaClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Enter the Department ID you would like to search
                                                </DialogContentText>
                                                <TextField onChange={handledepids}
                                                autoFocus
                                                margin="normal"
                                                value={depidsea}
                                                label="Department ID"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleSeaClose} color="success">Ok</Button>
                                                <Button onClick={handleSeaClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                            </Dialog>
                                            </div>}
                                            {seaddisplayresultdep && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Search: Department ID - {depidsea}</h4>
                                                </Typography>
                                        </div>}
                                            <Button color="rose" round>Advance Search</Button>
                                </GridItem>
                            </GridContainer>
                        </div>}
                        {isResultShownsta && <div className={classes.root}>
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
                                                <TextField onChange={handlestaname}
                                                autoFocus
                                                margin="normal"
                                                value={staname}
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlestapos}
                                                autoFocus
                                                margin="normal"
                                                value={stapos}
                                                label="Position"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlestaid}
                                                autoFocus
                                                margin="normal"
                                                value={staid}
                                                label="Staff Net ID"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleInsClose} color="success">Ok</Button>
                                                <Button onClick={handleInsClose1} color="warning">Cancel</Button>
                                                </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {insdisplayresultsta && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Insert: Staff Name - {staname}, Staff Position - {stapos}, Staff ID - {staid}</h4>
                                                </Typography>
                                        </div>}
                                    <Button onClick={handleUpdate} color="info" round>Update</Button>
                                    {openupd && <div className={classes.root}>
                                        <Dialog open={openupd} onClose={handleUpdClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>Enter the Staff ID you would like to update and then the new Staff ID</DialogContentText>
                                                <TextField onChange={handleoldstaid}
                                                autoFocus
                                                margin="normal"
                                                value={oldstaid}
                                                label="Old Staff Net ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlenewstaid}
                                                autoFocus
                                                margin="normal"
                                                value={newstaid}
                                                label="New Staff Net ID"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleUpdClose} color="success">Ok</Button>
                                                <Button onClick={handleUpdClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {upddisplayresultsta && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Update: Old Staff ID - {oldstaid}, New Staff ID - {newstaid}</h4>
                                                </Typography>
                                        </div>}
                                    <Button onClick={handleDelete} color="danger" round>Delete</Button>
                                    {opendel && <div className={classes.root}>
                                        <Dialog open={opendel} onClose={handleDelClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    What would you like to delete?
                                                </DialogContentText>
                                                <TextField onChange={handlestanamed}
                                                autoFocus
                                                margin="normal"
                                                value={stanamedel}
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlestaposd}
                                                autoFocus
                                                margin="normal"
                                                value={staposdel}
                                                label="Position"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlestaidd}
                                                autoFocus
                                                margin="normal"
                                                value={staiddel}
                                                label="Staff Net ID"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleDelClose} color="success">Ok</Button>
                                                <Button onClick={handleDelClose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>}
                                    {delddisplayresultsta && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Delete: Success Insert: Staff Name - {stanamedel}, Staff Position - {staposdel}, Staff ID - {staiddel}</h4>
                                                </Typography>
                                        </div>}
                                    <Button onClick={handleSearch} color="warning" round>Search</Button>
                                    {opensearch && <div className={classes.root}>
                                        <Dialog open={opensearch} onClose={handleSeaClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Enter the Staff Net ID you would like to search
                                                </DialogContentText>
                                                <TextField onChange={handlestaids}
                                                autoFocus
                                                margin="normal"
                                                value={staidsea}
                                                label="Staff Net ID"
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
                                            {seaddisplayresultsta && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Search: Staff ID - {staidsea}</h4>
                                                </Typography>
                                        </div>}
                                            <Button color="rose" round>Advance Search</Button>
                                </GridItem>
                            </GridContainer>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
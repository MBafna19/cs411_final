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
    const [isResultShownpur, setResultShownpur] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [openins, setOpenins] = React.useState(false);
    const [openupd, setOpenupd] = React.useState(false);
    const [opendel, setOpendel] = React.useState(false);
    const [opensearch, setOpensearch] = React.useState(false);
    const[openadv, setOpenadv] = React.useState(false);
    

    const handleChange = e => setValue(e.target.value);

    const res = '';


    //Student CRUD
    const [insdisplayresultstu, setinsresultstu] = useState(false);
    const [upddisplayresultstu, setupdresultstu] = useState(false);
    const [delddisplayresultstu, setdelresultstu] = useState(false);
    const [seaddisplayresultstu, setsearesultstu] = useState(false);
    const [advdisplayresultstu, setadvresultstu] = useState(false);
    


    const [stunetid, setstunetid] = useState('');
    const [stuname, setstuname] = useState('');
    const [oldstunid, setoldstunid] = useState('');
    const [oldstuname, setoldstuname] = useState('');
    const [newstuname, setnewstuname] = useState('');
    const [stunetiddel, setstunetiddel] = useState('');
    const [stunamedel, setstunamedel] = useState('');
    const [seastunetid, setstunetidsea] = useState('');
    const [advstunetid, setadvstunetid] = useState('');
  
    const handlestunid = snid => setstunetid(snid.target.value);
    const handlestuname = sname => setstuname(sname.target.value);
    const handlestuoldup = osnid => setoldstunid(osnid.target.value);
    const handlestuoldupname = osname => setoldstuname(osname.target.value);
    const handlestunewupname = nname => setnewstuname(nname.target.value);
    const handlestudnid = dsnid => setstunetiddel(dsnid.target.value);
    const handlestudname = dsname => setstunamedel(dsname.target.value);
    const handlestusnid = ssnid => setstunetidsea(ssnid.target.value);
    const handlestuanid = asnid => setadvstunetid(asnid.target.value);

    //Student (Prithiv)
    const getStudent = () => {
        Axios.post('http://localhost:3002/api/getStudent', {
            NetID: seastunetid
        }).then((result) => {
          alert(JSON.stringify(result.data).replace(/[\\r]/g, ''))
        })
      };
    
      const addStudent = () => { 
        Axios.post('http://localhost:3002/api/insertStudent', {
            NetID: seastunetid,
            Student_Name: stuname
        }).then(() => {
          alert('successful insertion')
        })
      };  
    
      const deleteStudent = () => {
        Axios.post('http://localhost:3002/api/deleteStudent', {
            NetID: stunetiddel
        }).then(() => {
          alert('successful deletion')
        })
      };
    
      const updateStudent = () => {
        Axios.post(`http://localhost:3002/api/updateStudent`, {
            NetID: oldstunid,
            Student_Name: newstuname
        }).then(() => {
          alert('successful update')
        })
      };
      
      const countRequires = () => {
        Axios.post('http://localhost:3002/api/countRequires', {
            NetID: advstunetid
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
    const [profid, setprofid] = useState('');
    const [oldproid, setoldproid] = useState('');
    const [oldproname, setoldproname] = useState('');
    const [newproname, setnewproname] = useState('');
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
    const handleprofid = pfid =>setprofid(pfid.target.value);
    const handleoldproid = opid => setoldproid(opid.target.value);
    const handleoldproname = opname => setoldproname(opname.target.value);
    const handlenewproname = npname => setnewproname(npname.target.value);
    const handleproiddel = piddel => setproiddel(piddel.target.value);
    const handlepronamedel = pnamedel => setpronamedel(pnamedel.target.value);
    const handleprotypedel = ptypedel => setprotypedel(ptypedel.target.value);
    const handleprochdel = pchdel => setprochdel(pchdel.target.value);
    const handleprosrdel = psrdel => setprosrdel(psrdel.target.value);
    const handleproidsea = pids => setproidsea(pids.target.value);

    const addProgram = () => { 
        Axios.post('http://localhost:3002/api/insertProgram', {
        P_ID: proid,
        Prog_name: proname,
        Type: protype,
        Special_req: proch,
        req_CH: prosr,
        Fk_ID: profid
    
        }).then(() => {
        alert('success insert')
        })
        
        };
       
       
      const getProgram = () => { 
         Axios.post('http://localhost:3002/api/getProgram', {
         P_ID: proidsea,
         }).then((result) => {
         let str = 'programs: '
         for(let i = 0; i < result.data.length; i++) {
           str = str + result.data[i].P_ID
           if(i != result.data.length - 1) {
             str = str + ", "
           }
         }
         alert(str)
         })
         
         };
       
       
      const deleteProgram = () => { 
           Axios.post('http://localhost:3002/api/deleteProgram', {
           P_ID: proiddel
           }).then(() => {
           alert('success delete')
           })
           
           };
       
      const updateProgram = () => { 
           Axios.post('http://localhost:3002/api/updateProgram', {
           P_ID: oldproid,
           Prog_name: newproname,
           }).then(() => {
           alert('success delete')
           })
             
          };
    

    //Course CRUD
    const [insdisplayresultcou, setinsresultcou] = useState(false);
    const [upddisplayresultcou, setupdresultcou] = useState(false);
    const [delddisplayresultcou, setdelresultcou] = useState(false);
    const [seaddisplayresultcpu, setsearesultcou] = useState(false);
    const [advdisplayresultcou, setadvresultcou] = useState(false);


    const [couname, setcouname] = useState('');
    const [coucrn, setcoucrn] = useState('');
    const [couch, setcouch] = useState('');
    const [oldcoucrn, setoldcoucrn] = useState('');
    const [oldcouname, setoldcouname] = useState('');
    const [newcouname, setnewcouname] = useState('');
    const [counamedel, setcounamedel] = useState('');
    const [coucrndel, setcoucrndel] = useState('');
    const [couchdel, setcouchdel] = useState('');
    const [coucrnsea, setcoucrnsea] = useState('');
  
    const handlecouname = cname => setcouname(cname.target.value);
    const handlecoucrn = ccrn => setcoucrn(ccrn.target.value);
    const handlecouch = cch => setcouch(cch.target.value);
    const handleoldcoucrn = occrn => setoldcoucrn(occrn.target.value);
    const handleoldcouname = ocname => setoldcouname(ocname.target.value);
    const handlenewcouname = ncname => setnewcouname(ncname.target.value);
    const handlecounamed = dcname => setcounamedel(dcname.target.value);
    const handlecoucrnd = dcid => setcoucrndel(dcid.target.value);
    const handlecouchd = dcch => setcouchdel(dcch.target.value);
    const handlecoucrns = sccrn => setcoucrnsea(sccrn.target.value);

    const addCourse = () => {
        Axios.post('http://localhost:3001/api/insertCourse', {
         CRN: coucrn,
         Course_Name: couname,
         Cred_hours: couch
        }).then(() => {
        alert('success insert')
        })
        };
       
        const deleteCourse = () => {
         Axios.post('http://localhost:3001/api/deleteCourse', {
           CRN: coucrndel,
           Course_Name: counamedel,
           Cred_hours: couchdel
          }).then(() => {
          alert('success delete')
          })
          };
       
          const getCourse = () => {
           Axios.post('http://localhost:3001/api/getCourse', {
            CRN: coucrnsea,
           }).then((result) => {
             let str = 'Course Name: '
             for(let i = 0; i < result.data.length; i++) {
               str = str + result.data[i].Course_Name
               if(i !== result.data.length - 1) {
                 str = str + ", "
               }
             }
             let str1 = 'Hours: '
             for(let i = 0; i < result.data.length; i++) {
               str1 = str1 + result.data[i].Cred_hours
               if(i !== result.data.length - 1) {
                 str1 = str1 + ", "
               }
             }
             let finalstr = 'Final info: '
             finalstr = str + "\n" + str1
             alert(finalstr)
           })
         };
         const updateCourse = () => { 
           Axios.post('http://localhost:3001/api/updateCourse', {
             CRN: oldcoucrn,
             Course_Name: newcouname,
             //Cred_hours: couch
           }).then(() => {
           alert('success update')
           }) 
          };
          const countStaffWorking = () => { 
           Axios.post('http://localhost:3001/api/countStaffWorking', {
           }).then((result) => {
             let str = ''
             for(let i = 0; i < result.data.length; i++) {
               str =  str + 'course name : ' + result.data[i].Course_Name + '  staff count : ' + result.data[i].staffcount + '\n'
             }
             alert(str)
           })
             
          };

    
    //Department CRUD
    const [insdisplayresultdep, setinsresultdep] = useState(false);
    const [upddisplayresultdep, setupdresultdep] = useState(false);
    const [delddisplayresultdep, setdelresultdep] = useState(false);
    const [seaddisplayresultdep, setsearesultdep] = useState(false);


    const [depname, setdepname] = useState('');
    const [depid, setdepid] = useState('');
    const [depadv, setdepadv] = useState('');
    const [olddepid, setolddepid] = useState('');
    const [olddepname, setolddepname] = useState('');
    const [newdepname, setnewdepname] = useState('');
    const [depnamedel, setdepnamedel] = useState('');
    const [depiddel, setdepiddel] = useState('');
    const [depadvdel, setdepadvdel] = useState('');
    const [depidsea, setdepidsea] = useState('');
  
    const handledepname = dname => setdepname(dname.target.value);
    const handledepid = did => setdepid(did.target.value);
    const handledepadv = dadv => setdepadv(dadv.target.value);
    const handleolddepid = odid => setolddepid(odid.target.value);
    const handleolddepname = odname => setolddepname(odname.target.value);
    const handlenewdepname = ndname => setnewdepname(ndname.target.value);
    const handledepnamed = ddname => setdepnamedel(ddname.target.value);
    const handledepidd = ddid => setdepiddel(ddid.target.value);
    const handledepadvd = ddadv => setdepadvdel(ddadv.target.value);
    const handledepids = sdid => setdepidsea(sdid.target.value);

    const getDepartment = () => {
        Axios.post('http://localhost:3002/api/getDepartment', {
          ID: depidsea
        }).then((result) => {
          alert(JSON.stringify(result.data).replace(/[\\r]/g, ''))
        })
      };
    
      const addDepartment = () => { 
        Axios.post('http://localhost:3002/api/insertDepartment', {
          ID: depid,
          Dept_Name: depname,
          Advisor: depadv
        }).then(() => {
          alert('successful insertion')
        })
      };  
    
      const deleteDepartment = () => {
        Axios.post('http://localhost:3002/api/deleteDepartment', {
          ID: depiddel
        }).then(() => {
          alert('successful deletion')
        })
      };
    
      const updateDepartment = () => {
        Axios.post(`http://localhost:3002/api/updateDepartment`, {
          ID: olddepid,
         Dept_Name: newdepname
        }).then(() => {
          alert('successful update')
        })
      };
    

   
    //Staff CRUD
    const [insdisplayresultsta, setinsresultsta] = useState(false);
    const [upddisplayresultsta, setupdresultsta] = useState(false);
    const [delddisplayresultsta, setdelresultsta] = useState(false);
    const [seaddisplayresultsta, setsearesultsta] = useState(false);
    const [advdisplayresultsta, setadvresultsta] = useState(false);


    const [staname, setstaname] = useState('');
    const [staid, setstaid] = useState('');
    const [stapos, setstapos] = useState('');
    const [oldstaid, setoldstaid] = useState('');
    const [oldstapos, setoldstapos] = useState('');
    const [newstapos, setnewstapos] = useState('');
    const [stanamedel, setstanamedel] = useState('');
    const [staiddel, setstaiddel] = useState('');
    const [staposdel, setstaposdel] = useState('');
    const [staidsea, setstaidsea] = useState('');
  
    const handlestaname = sname => setstaname(sname.target.value);
    const handlestaid = sid => setstaid(sid.target.value);
    const handlestapos = spos => setstapos(spos.target.value);
    const handleoldstaid = osid => setoldstaid(osid.target.value);
    const handleoldstapos = ospos => setoldstapos(ospos.target.value);
    const handlenewstapos = nspos => setnewstapos(nspos.target.value);
    const handlestanamed = dsname => setstanamedel(dsname.target.value);
    const handlestaidd = dsid => setstaiddel(dsid.target.value);
    const handlestaposd = dspos => setstaposdel(dspos.target.value);
    const handlestnida = ssid => setstaidsea(ssid.target.value);

    const insertStaff = () => { 
        Axios.post('http://localhost:3002/api/insertStaff', {
        NetID: staid,
        Staff_Name: staname,
        Position: stapos
        }).then(() => {
        alert('success insert')
        })
        };
        const getStaff = () => { 
         Axios.post('http://localhost:3002/api/getStaff', {
         NetID: staidsea,
         }).then((result) => {
         let str = 'programs: '
         for(let i = 0; i < result.data.length; i++) {
           str = str + result.data[i].Staff_Name
           if(i != result.data.length - 1) {
             str = str + ", "
           }
         }
         alert(str)
         })
         };
       
       
         const deleteStaff = () => { 
           Axios.post('http://localhost:3002/api/delete', {
           NetID: staiddel
           }).then(() => {
           alert('success delete')
           })
           
           };
       
         const updateStaff = () => { 
           Axios.post('http://localhost:3002/api/update', {
           NetID: oldstaid,
           Position: newstapos   
           }).then(() => {
           alert('success delete')
           })
             
          };
       
          const advancedStaff = () => { 
           Axios.post('http://localhost:3002/api/advancedStaff', {
           }).then((result) => {
             let str = ''
             for(let i = 0; i < result.data.length; i++) {
               str =  str + result.data[i].Dept_Name + " : " + result.data[i].creditHours + ' credit hours\n'
             }
             alert(str)
           })
             
          };

    //Pursuing CRUD

    const [insdisplayresultpur, setinsresultpur] = useState(false);
    const [upddisplayresultpur, setupdresultpur] = useState(false);
    const [delddisplayresultpur, setdelresultpur] = useState(false);
    const [seaddisplayresultpur, setsearesultpur] = useState(false);
    const [advdisplayresultpur, setadvresultpur] = useState(false);
    


    const [purnetid, setpurnetid] = useState('');
    const [purpid, setpurpid] = useState('');
    const [oldpurnid, setoldpurid] = useState('');
    const [oldpurpid, setoldpurpid] = useState('');
    const [newpurpid, setnewpurpid] = useState('');
    const [delpurnid, setdelpurnid] = useState('');
    const [delpurpid, setdelpurpid] = useState('');
    const [seapurnid, setseapurnid] = useState('');
  
    const handlepurnid = pnid => setpurnetid(pnid.target.value);
    const handlepurpid = ppid => setpurpid(ppid.target.value);
    const handleoldpurnid = opnid => setoldpurid(opnid.target.value);
    const handleoldpurpid = oppid => setoldpurpid(oppid.target.value);
    const handlenewpurpid = nppid => setnewpurpid(nppid.target.value);
    const handlepurniddel = dpnid => setdelpurnid(dpnid.target.value);
    const handlepurpiddel = dppid => setdelpurpid(dppid.target.value);
    const handleseapurnid = spnid => setseapurnid(spnid.target.value);
    
    const addPursuing = () => { 
        Axios.post('http://localhost:3002/api/insertPursuing', {
        NetID: purnetid,
        P_ID: purpid
        }).then(() => {
        alert('success insert')
        })
        
        };
       
        const getPursuing = () => { 
         Axios.post('http://localhost:3002/api/getPursuing', {
         NetID: seapurnid,
         }).then((result) => {
         let str = 'programs: '
         for(let i = 0; i < result.data.length; i++) {
           str = str + result.data[i].P_ID
           if(i != result.data.length - 1) {
             str = str + ", "
           }
         }
         alert(str)
         })
         
         };
       
       
         const deletePursuing = () => { 
           Axios.post('http://localhost:3002/api/deletePursuing', {
           NetID: delpurnid,
           P_ID: delpurpid
           }).then(() => {
           alert('success delete')
           })
           
           };
       
         const updatePursuing = () => { 
           Axios.post('http://localhost:3002/api/updatePursuing', {
           NetID: oldpurnid,
           P_ID: newpurpid
           }).then(() => {
           alert('success update')
           })
             
          };
       
          const sumPursuingCredHrs = () => { 
           Axios.post('http://localhost:3002/api/sumPursuingCredHrs', {
           }).then((result) => {
             let str = ''
             for(let i = 0; i < result.data.length; i++) {
               str =  str + result.data[i].NetID + " : " + result.data[i].creditHours + ' credit hours\n'
             }
             alert(str)
           })
             
          };
    


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

        setinsresultpur(false);
        setupdresultpur(false);
        setdelresultpur(false);
        setsearesultpur(false);
        setadvresultpur(false)

    const [advdisplayresultpur, setadvresultpur] = useState(false);
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
          setResultShownpur(false)
      }
      if (value == 'Program') {
        setResultShownstu(false)
        setResultShownpro(true)
        setResultShowncou(false)
        setResultShowndep(false)
        setResultShownsta(false)
        setResultShownpur(false)
    }
    if (value == 'Course') {
        setResultShownstu(false)
        setResultShownpro(false)
        setResultShowncou(true)
        setResultShowndep(false)
        setResultShownsta(false)
        setResultShownpur(false)
    }
    if (value == 'Department') {
        setResultShownstu(false)
        setResultShownpro(false)
        setResultShowncou(false)
        setResultShowndep(true)
        setResultShownsta(false)
        setResultShownpur(false)
    }
    if (value == 'Staff') {
        setResultShownstu(false)
        setResultShownpro(false)
        setResultShowncou(false)
        setResultShowndep(false)
        setResultShownsta(true)
        setResultShownpur(false)
    }
    if (value == 'Pursuing') {
        setResultShownstu(false)
        setResultShownpro(false)
        setResultShowncou(false)
        setResultShowndep(false)
        setResultShownsta(false)
        setResultShownpur(true)
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

      //Pursuing
      setinsresultpur(false)
      setupdresultsta(false);
      setdelresultsta(false)
      setsearesultsta(false)
      setadvresultpur(false)
    };
    const handleInsClose = () => {
        setOpenins(false);
        addStudent();
        insertStaff();
        addCourse();
        addProgram();
        addDepartment();

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

        //Pursuing
        setinsresultpur(true)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(false)
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

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(false)
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

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(false)
    };
    const handleUpdClose = () => {
        setOpenupd(false);
        updateStudent();
        updateStaff();
        updateCourse();
        updateProgram();
        updateDepartment();

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

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(true);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(false)
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

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(false)
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

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(false)
    };
    const handleDelClose = () => {
        setOpendel(false);
        deleteStudent();
        deleteStaff();
        deleteCourse();
        deleteProgram();
        deleteDepartment();

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

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(true)
        setadvresultpur(false)
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

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(false)
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

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(false)
    };
    const handleSeaClose = () => {
        setOpensearch(false);
        getStudent();
        getStaff();
        getCourse();
        getProgram();
        getDepartment();

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

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(true)
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

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(false)
    };
    const handleAdvance = () => {
        setOpenadv(true)
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

      //Pursuing
      setinsresultpur(false)
      setupdresultsta(false);
      setdelresultsta(false)
      setsearesultsta(false)
      setadvresultpur(false)
    }
    const handleAdvanceclose = () => {
        setOpenadv(false)        

                //Student
                setinsresultstu(false);
                setupdresultstu(false);
                setdelresultstu(false);
                setsearesultstu(false)
                setadvresultstu(true)
                countRequires()
        
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
                setadvresultcou(false)
                countStaffWorking();
        
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
                setadvresultsta(true)
                advancedStaff()

                //Pursuing
                setinsresultpur(false)
                setupdresultsta(false);
                setdelresultsta(false)
                setsearesultsta(false)
                setadvresultpur(true)
                sumPursuingCredHrs()
    }
    const handleAdvanceclose1 = () => {
        setOpenadv(false)
        
        //Student
        setinsresultstu(false);
        setupdresultstu(false);
        setdelresultstu(false);
        setsearesultstu(false)
        setadvresultstu(false)

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
        setadvresultcou(false)

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
        setadvresultsta(false)

        //Pursuing
        setinsresultpur(false)
        setupdresultsta(false);
        setdelresultsta(false)
        setsearesultsta(false)
        setadvresultpur(false)
    }
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
                                <MenuItem value={"Pursuing"}>Pursuing</MenuItem>
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
                                                <Button onClick={handleInsClose} color="success">Ok</Button>
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
                                    <Button onClick={deleteStudent, handleDelete} color="danger" round>Delete</Button>
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
                                            <Button onClick={handleAdvance} color="rose" round>Advance Search</Button>
                                            {openadv && <div className={classes.root}>
                                            <Dialog open={openadv} onClose={handleAdvanceclose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                Enter the NetID :
                                                </DialogContentText>

                                                <TextField onChange={handlestuanid}
                                                autoFocus
                                                margin="normal"
                                                value={advstunetid}
                                                label="NetID"
                                                type="text"
                                                fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleAdvanceclose} color="success">Ok</Button>
                                                <Button onClick={handleAdvanceclose1} color="warning">Cancel</Button>
                                            </DialogActions>
                                            </Dialog>
                                            </div>}
                                            {advdisplayresultstu && <div className={classes.root}>
                                            </div>} 
                                            
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
                                                <TextField onChange={handleprofid}
                                                autoFocus
                                                margin="normal"
                                                value={profid}
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
                                                <DialogContentText>Enter the Program ID for which you would like to update the name and then the new Program name</DialogContentText>
                                                <TextField onChange={handleoldproid}
                                                autoFocus
                                                margin="normal"
                                                value={oldproid}
                                                label="Old Program ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleoldproname}
                                                autoFocus
                                                margin="normal"
                                                value={oldproname}
                                                label="Old Program ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlenewproname}
                                                autoFocus
                                                margin="normal"
                                                value={newproname}
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
                                                    <h4>Success Update: Program ID - {oldproid}, Old Program Name - {oldproname} and New Program Name - {newproname}</h4>
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
                                                <TextField onChange={handleoldcoucrn}
                                                autoFocus
                                                margin="normal"
                                                value={oldcoucrn}
                                                label="Course CRN"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleoldcouname}
                                                autoFocus
                                                margin="normal"
                                                value={oldcouname}
                                                label="Old Course Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlenewcouname}
                                                autoFocus
                                                margin="normal"
                                                value={newcouname}
                                                label="New Course Name"
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
                                                    <h4>Success Update: Course CRN - {oldcoucrn}, Old Course Name - {oldcouname} and New Course Name - {newcouname}</h4>
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
                                            <Button onClick={handleAdvanceclose} color="rose" round>Advance Search</Button>
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
                                                <DialogContentText>Enter the Department ID for which you would like to update the name and then the new Department Name</DialogContentText>
                                                <TextField onChange={handleolddepid}
                                                autoFocus
                                                margin="normal"
                                                value={olddepid}
                                                label="Old Department ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleolddepname}
                                                autoFocus
                                                margin="normal"
                                                value={olddepname}
                                                label="New Department Name"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlenewdepname}
                                                autoFocus
                                                margin="normal"
                                                value={newdepname}
                                                label="Old Department Name"
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
                                                    <h4>Success Update: Department ID - {olddepid}, Old Department Name - {olddepname} and New Department Name - {newdepname}</h4>
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
                                                <DialogContentText>Enter the Staff ID whose position you would like to update and then the new Staff position</DialogContentText>
                                                <TextField onChange={handleoldstaid}
                                                autoFocus
                                                margin="normal"
                                                value={oldstaid}
                                                label="Old Staff Net ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleoldstapos}
                                                autoFocus
                                                margin="normal"
                                                value={oldstapos}
                                                label="Old Staff Position"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlenewstapos}
                                                autoFocus
                                                margin="normal"
                                                value={newstapos}
                                                label="New Staff Position"
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
                                                    <h4>Success Update: Staff ID - {oldstaid}, Old Staff Position - {oldstapos} and New Staff Position - {newstapos}</h4>
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
                                                <TextField onChange={handlestnida}
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
                                            <Button onClick={handleAdvanceclose} color="rose" round>Advance Search</Button>
                                </GridItem>
                            </GridContainer>
                            {isResultShownpur && <div className={classes.root}>
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
                                                <TextField onChange={handlepurnid}
                                                autoFocus
                                                margin="normal"
                                                value={purnetid}
                                                label="NetID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlepurpid}
                                                autoFocus
                                                margin="normal"
                                                value={purpid}
                                                label="Program ID"
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
                                    {insdisplayresultpur && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Insert: NetId - {purnetid} and Program ID - {purpid}</h4>
                                                </Typography>
                                    </div>}
                                    <Button onClick={handleUpdate} color="info" round>Update</Button>
                                    {openupd && <div className={classes.root}>
                                        <Dialog open={openupd} onClose={handleUpdClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>Enter the NetID of the student whose name you would like to update and then the new name</DialogContentText>
                                                <TextField onChange={handleoldpurnid}
                                                autoFocus
                                                margin="normal"
                                                value={oldpurnid}
                                                label="NetID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handleoldpurpid}
                                                autoFocus
                                                margin="normal"
                                                value={oldpurpid}
                                                label="Old Program ID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlenewpurpid}
                                                autoFocus
                                                margin="normal"
                                                value={newpurpid}
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
                                    {upddisplayresultpur && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Update: NetId - {oldpurnid}, Old Program ID - {oldpurpid} and New Program ID - {newpurpid}</h4>
                                                </Typography>
                                    </div>}
                                    <Button onClick={deleteStudent, handleDelete} color="danger" round>Delete</Button>
                                    {opendel && <div className={classes.root}>
                                        <Dialog open={opendel} onClose={handleDelClose} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title"></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    What would you like to delete?
                                                </DialogContentText>
                                                <TextField onChange ={handlepurniddel}
                                                autoFocus
                                                margin="normal"
                                                value={delpurnid}
                                                label="NetID"
                                                type="text"
                                                fullWidth
                                                />
                                                <TextField onChange={handlepurpiddel}
                                                autoFocus
                                                margin="normal"
                                                value={delpurpid}
                                                label="Program ID"
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
                                    {delddisplayresultpur && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Delete: NetId - {delpurnid} and Program ID - {delpurpid}</h4>
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
                                                <TextField onChange={handleseapurnid}
                                                autoFocus
                                                margin="normal"
                                                value={seapurnid}
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
                                            {seaddisplayresultpur && <div className={classes.root}>
                                                <Typography className={classes.title}>
                                                    <h4>Success Search: NetId - {seapurnid} </h4>
                                                </Typography>
                                            </div>}
                                            <Button onClick={handleAdvanceclose} color="rose" round>Advance Search</Button>
                                            
                                </GridItem>
                            </GridContainer>
                        </div>}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
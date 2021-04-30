const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const flop = 1;


var db = mysql.createConnection({
    host:'127.0.0.1',
    port: 3306,
    user: 'root',
    password:'12345',
    database:'project',
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//PRITHIV (Student)

app.post("/api/getStudent", (require, response) => {
    const NetID = require.body.NetID;
    const sqlSelect = "SELECT Student_Name FROM `Student` WHERE NetID = ?";
    db.query(sqlSelect, [NetID], (err, result) => {
        response.send(result);
    })
});

app.post("/api/insertStudent", (require, response) => {
    const NetID = require.body.NetID;
    const Student_Name = require.body.Student_Name;

    const sqlInsert = "INSERT INTO `Student` (`NetID`, `Student_Name`) VALUES (?,?)";
    db.query(sqlInsert, [NetID, Student_Name], (err, result) => {
        response.send(result);
        console.log(err);
    })
});

app.post("/api/deleteStudent", (require, response) => {
    const NetID = require.body.NetID;

    const sqlDelete = "DELETE FROM `Student` WHERE NetID = ?";
    db.query(sqlDelete, NetID, (err, result) => {
        
        console.log(err);
    })
});

app.post("/api/updateStudent", (require, response) => {
    const NetID = require.body.NetID;
    const Student_Name = require.body.Student_Name;

    const sqlUpdate = "UPDATE `Student` SET Student_Name = ? WHERE NetID = ?";
    db.query(sqlUpdate, [Student_Name, NetID], (err, result) => {
        console.log(err);
    })
});

app.post("/api/countRequires", (require, response) => {
    const NetID = require.body.NetID;
    const sqlAdv = "SELECT Count(Requires.CRN) FROM Student Join Pursuing ON Student.NetID = Pursuing.NetID Join Requires ON Pursuing.P_ID = Requires.P_ID WHERE Student.NetID = ? ORDER BY Count(Requires.CRN) DESC LIMIT 15";
    db.query(sqlAdv, [NetID], (err, result) => {
        response.send(result);
        console.log(err);
    })
});

//OISHEE (Course)

app.post("/api/insertCourse", (require, response) => {
    const CRN = require.body.CRN;
    const Course_Name = require.body.Course_Name;
    const Cred_hours = require.body.Cred_hours;
    const sqlInsert = "INSERT INTO `Course` (`CRN`,`Course_Name`, `Cred_hours`) VALUES (?,?,?)";
    db.query(sqlInsert, [CRN, Course_Name, Cred_hours], (err, result) => {
       response.send(result);
        console.log(err);
    })
   });
   
   app.post("/api/deleteCourse", (require, response) => {
       const CRN = require.body.CRN;
       const Course_Name = require.body.Course_Name;
       const Cred_hours = require.body.Cred_hours;
       const sqlDelete = "DELETE FROM `Course` WHERE CRN = ? AND Course_Name = ? AND Cred_hours = ?";
       db.query(sqlDelete, [CRN, Course_Name, Cred_hours] , (err, result) => {
           response.send(result);
           console.log(err);
       })
   });
   
   app.post("/api/getCourse", (require, response) => {
       const CRN = require.body.CRN;
       const Course_Name = require.body.Course_Name;
       const Cred_hours = require.body.Cred_hours;
       const sqlSelect = "SELECT Course_Name, Cred_hours FROM `Course` WHERE CRN = ?";
       db.query(sqlSelect, [CRN], (err, result) => {
           response.send(result);
           console.log(result);
       })
   });
   
   app.post("/api/updateCourse", (require, response) => {
       const CRN = require.body.CRN;
       const Course_Name = require.body.Course_Name;
       const Cred_hours = require.body.Cred_hours;
       const sqlUpdate = "UPDATE `Course` SET Course_Name = ? WHERE CRN = ?";
       db.query(sqlUpdate, [Course_Name, CRN], (err, result) => {
           response.send(result);
           console.log(err);
       })
   });
   
   app.post("/api/countStaffWorking", (require, response) => {
       const sqladv = "SELECT Course.Course_Name, Count(Working_in.NetID) as staffcount FROM Course JOIN Working_in ON Working_in.CRN = Course.CRN Group By Course.Course_Name ORDER BY Count(Working_in.NetID) DESC Limit 15";
       db.query(sqladv, null, (err, result) => {
       response.send(result);
       console.log(err);
       })
   });

//SUNNY (Staff)

app.post("/api/insertStaff", (require, response) => {
    const NetID = require.body.NetID;
    const Staff_Name = require.body.Staff_Name;
    const Position = require.body.Position;
    const sqlInsert = "INSERT INTO `Staff` (`NetID`,`Staff_Name`,`Position`) VALUES (?,?,?)";
    db.query(sqlInsert, [NetID, Staff_Name, Position], (err, result) => {
        if (err)
       console.log(error);
    })
   });
   
   app.post("/api/getStaff", (require, response) => {
       const NetID = require.body.NetID;
       const Staff_Name = require.body.Staff_Name;
       const Position = require.body.Position;
       const sqlInsert = "Select Staff_Name, Position  from `Staff` where NetID = ?";
       db.query(sqlInsert, [NetID, Staff_Name, Position], (err, result) => {
       response.send(result);
       console.log(result)
       })
   });
   
   app.post("/api/deleteStaff", (require, response) => {
       const NetID = require.body.NetID;
       const Staff_Name = require.body.Staff_Name;
       const Position = require.body.Position;
       const sqlInsert = "DELETE FROM `Staff` WHERE NetID = ?";
       db.query(sqlInsert, [NetID, Staff_Name, Position], (err, result) => {
           if(err)
       console.log(err);
       })
      });
   
   app.post("/api/updateStaff", (require, response) => {
       const Position = require.body.Position;
       const NetID = require.body.NetID;
       
       
       const sqlInsert = "Update `Staff` SET Position = ? WHERE NetID = ?";
       db.query(sqlInsert, [NetID, Staff_Name, Position], (err, result) => {
           if(err)
       console.log(err);
       })
   });
   
   app.post("/api/countStaffDepartment", (require, response) => {
       const sqlInsert = "SELECT Department.Dept_Name, Count(Staff.NetID) as creditHours FROM Department JOIN Staff ON Department.ID = Staff.Fk_ID Group By Department.Dept_Name ORDER BY Count(Staff.NetID) DESC Limit 15;";
       db.query(sqlInsert, null, (err, result) => {
       response.send(result);
           if(err)
       console.log(err);
       })
   });

//MIHIR (Pursuing)

app.post("/api/insertPursuing", (require, response) => {
    const NetID = require.body.NetID;
    const P_ID = require.body.P_ID;
    const sqlInsert = "INSERT INTO `Pursuing` (`NetID`,`P_ID`) VALUES (?,?)";
    db.query(sqlInsert, [NetID, P_ID], (err, result) => {
    console.log(err);
    })
   });
   
   app.post("/api/getPursuing", (require, response) => {
       const NetID = require.body.NetID;
       const P_ID = require.body.P_ID;
       const sqlInsert = "Select P_ID from `Pursuing` where NetID = ?";
       db.query(sqlInsert, [NetID], (err, result) => {
       response.send(result);
       console.log(result)
       })
   });
   
   app.post("/api/deletePursuing", (require, response) => {
       const NetID = require.body.NetID;
       const P_ID = require.body.P_ID;
       const sqlInsert = "DELETE FROM `Pursuing` WHERE NetID = ? and P_ID = ?";
       db.query(sqlInsert, [NetID, P_ID], (err, result) => {
       console.log(err);
       })
      });
   
   app.post("/api/updatePursuing", (require, response) => {
       const NetID = require.body.NetID;
       const P_ID = require.body.P_ID;
       const sqlInsert = "Update `Pursuing` SET NetID = ? WHERE NetID = ?";
       db.query(sqlInsert, [P_ID, NetID], (err, result) => {
       console.log(err);
       })
   });
   
   app.post("/api/sumPursuingCredHrs", (require, response) => {
       const sqlInsert = "SELECT Pursuing.NetID, SUM(Program.Req_CH) as creditHours FROM Pursuing JOIN Program ON Pursuing.P_ID = Program.P_ID Group By Pursuing.NetID ORDER BY SUM(Program.Req_CH) DESC Limit 15;";
       db.query(sqlInsert, null, (err, result) => {
       response.send(result);
       console.log(err);
       })
   });

//New Queries

app.post("/api/listCoursesRequired", (require, response) => {
    const sqlList = "SELECT Program.Name FROM Program Join Requires ON Program.P_ID = Requires.P_ID Join Taking ON Requires.CRN = Taking.CRN WHERE (CRN IN Taking OR CRN IN Requires) AND (CRN NOT IN Taking OR CRN NOT IN Requires) AS coursesRemaining HAVING min(coursesRemaining) LIM 3";
    db.query(sqlList, null, (err, result) => {
    response.send(result);
    console.log(err);
    })
});

//Stored Procedure

//app.listen
app.listen(3002, () => {
    console.log("running on port 3002");
})
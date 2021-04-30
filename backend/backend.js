const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const flop = 1;


var db = mysql.createConnection({
    host:'34.67.127.228',
    user: 'root',
    password:'12345',
    database:'project',
    port: '3306'
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//Taking

app.post("/api/getTaking", (require, response) => {
    const NetID = require.body.NetID;
    const sqlSelect = "SELECT Taking.CRN FROM `Taking` WHERE NetID = ?";
    db.query(sqlSelect, [NetID], (err, result) => {
        response.send(result);
    })
});

app.post("/api/getAllCourse", (require, response) => {
    const sqlSelect = "SELECT * FROM `Course`";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
        console.log(result);
    })
});

app.post("/api/insertTaking", (require, response) => {
    const NetID = require.body.NetID;
    const CRN = require.body.CRN;

    const sqlInsert = "INSERT INTO `Taking` (`NetID`, `CRN`) VALUES (?,?)";
    db.query(sqlInsert, [NetID, CRN], (err, result) => {
        response.send(result);
        console.log(err);
    })
});

app.post("/api/deleteTaking", (require, response) => {
    const NetID = require.body.NetID;

    const sqlDelete = "DELETE FROM `Taking` WHERE NetID = ?";
    db.query(sqlDelete, NetID, (err, result) => {
        response.send(result)
        console.log(err);
    })
});

app.post("/api/updateTaking", (require, response) => {
    const NetID = require.body.NetID;
    const CRN = require.body.CRN;

    const sqlUpdate = "UPDATE `Taking` SET CRN = ? WHERE NetID = ?";
    db.query(sqlUpdate, [CRN, NetID], (err, result) => {
        console.log(err);
    })
});

//Department

app.post("/api/getDepartment", (require, response) => {
    const ID = require.body.ID;
    const sqlSelect = "SELECT Dept_Name, Advisor FROM `Department` WHERE ID = ?";
    db.query(sqlSelect, [ID], (err, result) => {
        response.send(result);
    })
});

app.post("/api/insertDepartment", (require, response) => {
    const ID = require.body.ID;
    const Dept_Name = require.body.Dept_Name;
    const Advisor = require.body.Advisor;

    const sqlInsert = "INSERT INTO `Dept_Name` (`ID`, `Dept_Name`,'Advisor') VALUES (?,?,?)";
    db.query(sqlInsert, [ID, Dept_Name, Advisor], (err, result) => {
        response.send(result);
        console.log(err);
    })
});

app.post("/api/deleteDepartment", (require, response) => {
    const ID = require.body.ID;

    const sqlDelete = "DELETE FROM `Department` WHERE ID = ?";
    db.query(sqlDelete, ID, (err, result) => {
        
        console.log(err);
    })
});

app.post("/api/updateDepartment", (require, response) => {
    const ID = require.body.ID;
    const Dept_Name = require.body.Dept_Name;
    
    const sqlUpdate = "UPDATE `Department` SET Dept_Name = ? WHERE ID = ?";
    db.query(sqlUpdate, [Dept_Name, ID], (err, result) => {
        console.log(err);
    })
});

//Requires

app.post("/api/getRequires", (require, response) => {
    const P_ID = require.body.P_ID;

    const sqlSelect = "SELECT CRN FROM `Requires` WHERE P_ID = ?";
    db.query(sqlSelect, [P_ID], (err, result) => {
        response.send(result);
    })
});

app.post("/api/insertRequires", (require, response) => {
    const CRN = require.body.CRN;
    const P_ID = require.body.P_ID;

    const sqlInsert = "INSERT INTO `Requires` (`CRN`, `P_ID`) VALUES (?,?)";
    db.query(sqlInsert, [CRN, P_ID], (err, result) => {
        response.send(result);
        console.log(err);
    })
});

app.post("/api/deleteRequires", (require, response) => {
    const CRN = require.body.CRN;
    const P_ID = require.body.P_ID;

    const sqlDelete = "DELETE FROM `Requires` WHERE (CRN = ? AND P_ID = ?)";  // not sure if this is valid
    db.query(sqlDelete,[CRN, P_ID], (err, result) => {
        
        console.log(err);
    })
});

app.post("/api/updateRequires", (require, response) => {
    const CRN = require.body.CRN;
    const P_ID = require.body.P_ID;

    const sqlUpdate = "UPDATE `Requires` SET CRN = ? WHERE P_ID = ?";
    db.query(sqlUpdate, [CRN, P_ID], (err, result) => {
        console.log(err);
    })
});

//Program

app.post("/api/getProgram", (require, response) => {
    const P_ID = require.body.P_ID;
    const sqlSelect = "SELECT * FROM `Program` WHERE P_ID = ?";
    db.query(sqlSelect, [P_ID], (err, result) => {
        response.send(result);
    })
});

app.post("/api/insertProgram", (require, response) => {
    const P_ID = require.body.P_ID;
    const Prog_name = require.body.Prog_name;
    const Type = require.body.Type;
    const Special_req = require.body.Special_req;
    const req_CH = require.body.req_CH;
    const Fk_ID = require.body.Fk_ID;

    const sqlInsert = "INSERT INTO `Program` (`P_ID`, `Prog_name`, 'Type', 'Special_req', 'req_CH', 'Fk_ID') VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [`P_ID`, `Prog_name`, 'Type', 'Special_req', 'req_CH', 'Fk_ID'], (err, result) => {
        response.send(result);
        console.log(err);
    })
});

app.post("/api/deleteProgram", (require, response) => {
    const P_ID = require.body.P_ID;

    const sqlDelete = "DELETE FROM `Program` WHERE P_ID = ?";
    db.query(sqlDelete, P_ID, (err, result) => {
        
        console.log(err);
    })
});

app.post("/api/updateProgram", (require, response) => {
    const P_ID = require.body.P_ID;
    const Prog_name = require.body.Prog_name;

    const sqlUpdate = "UPDATE `Program` SET Prog_name = ? WHERE P_ID = ?";
    db.query(sqlUpdate, [Prog_name, P_ID], (err, result) => {
        console.log(err);
    })
});

//Working_in

app.post("/api/getWorking", (require, response) => {
    const NetID = require.body.NetID;
    const sqlSelect = "SELECT CRN FROM `Working_in` WHERE NetID = ?";
    db.query(sqlSelect, [NetID], (err, result) => {
        response.send(result);
    })
});

app.post("/api/insertWorking", (require, response) => {
    const NetID = require.body.NetID;
    const CRN = require.body.CRN;

    const sqlInsert = "INSERT INTO `Working_in` (`NetID`, `CRN`) VALUES (?,?)";
    db.query(sqlInsert, [NetID, CRN], (err, result) => {
        response.send(result);
        console.log(err);
    })
});

app.post("/api/deleteWorking", (require, response) => {
    const NetID = require.body.NetID;

    const sqlDelete = "DELETE FROM `Working_in` WHERE NetID = ?";
    db.query(sqlDelete, NetID, (err, result) => {
        
        console.log(err);
    })
});

app.post("/api/updateWorking", (require, response) => {
    const NetID = require.body.NetID;
    const CRN = require.body.CRN;

    const sqlUpdate = "UPDATE `Working_in` SET CRN = ? WHERE NetID = ?";
    db.query(sqlUpdate, [CRN, NetID], (err, result) => {
        console.log(err);
    })
});

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
       console.log(err);
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
       db.query(sqlInsert, [Position, NetID], (err, result) => {
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
});



// classes left in the students program
app.post("/api/listRemainingCourses", (require, response) => {
    const NetID = require.body.NetID;
    
    const sqlUpdate = "Select distinct Requires.CRN from Pursuing, Requires, Taking where Pursuing.NetID = ? and Taking.NetID = Pursuing.NetID and Requires.P_ID = Pursuing.P_ID and Requires.CRN NOT IN (SELECT Taking.CRN FROM Taking WHERE Taking.NetID = ?)";
        db.query(sqlUpdate, [NetID, NetID], (err, result) => {
        response.send(result);
        console.log(err);
    })
});

// closest progam to completion
app.post("/api/closestProgramToCompletion", (require, response) => {
    const NetID = require.body.NetID;
    
    const sqlUpdate = "Select Minor, count(distinct Requires.CRN) - subTable.Classes_Taken_Towards_Minor as Remaining_Classes_For_Minor from Requires, (Select distinct Program.P_ID as PID, Program.Prog_name as Minor, count(distinct Requires.CRN) as Classes_Taken_Towards_Minor from (Requires join Program on Requires.P_ID = Program.P_ID), Taking where Taking.NetID = ? and Program.Type = 'Minor' and Requires.CRN IN (SELECT Taking.CRN FROM Taking WHERE Taking.NetID = ?) Group by Requires.P_ID order by count(distinct Requires.CRN) desc) as subTable Where subTable.PID = Requires.P_ID group by Requires.P_ID order by count(distinct Requires.CRN) - subTable.Classes_Taken_Towards_Minor asc;"; 
    db.query(sqlUpdate, [NetID, NetID], (err, result) => {
        response.send(result);
        console.log(err);
    })
});

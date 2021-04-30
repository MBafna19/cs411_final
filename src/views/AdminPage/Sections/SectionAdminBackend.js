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
        
    })
});
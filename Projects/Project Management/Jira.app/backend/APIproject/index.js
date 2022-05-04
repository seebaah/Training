const express = require('express');
const app = express();
var mysql = require('mysql');
const port = 5050;
app.use(express.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "project"
});

app.post('/addition', function (req, res) {
    // console.log(req, res);
    var a = parseInt(req.body.numone);
    var b = parseInt(req.body.numtwo);
    var c = a + b;
    res.send("Result=" + c);

})

// Login
app.post('/Uservalidate', function (req, res) {
    var usrname = req.body.username;
    var passwrd = req.body.password;
    var usrtype = req.body.usertype;
    var sql1 = "Select id from tblusers where txtUsername='" + usrname + "';";
    var sql2 = "Update tblusers set txtUsername='" + usrname + "', txtPassword='" + passwrd + "',RefUserRole='" + usrtype + "';;"
    con.query(sql1, function (err, result) {
        // if id exists
        if (result.length > 0) {
            // if id=reqid?
            if (result[0].id == req.body.id) {
                //update
                con.query(sql2, function (err, result) {
                    if (err) throw err;

                    res.send(result);
                })

            }
            //  else   
            else {
                // return userexists
                res.send("user exists!");
            }
        }
        // else
        else {
            // return user doesn't exists
            res.send("user doesnt exist!");
        }

    });
})
// Board
app.post('/Userfetch1', function (req, res) 
{ 
    con.connect(function (err) 
    {


        if (err) throw err;
        var a="SELECT id,txtUsername FROM project.tblusers WHERE RefUserRole=4;;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

app.post('/UserTaskfetch', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="SELECT u.id,u.txtUserName,t.txtTitle,t.txtStatus FROM project.tblusers u, project.tbltasks t WHERE u.id=t.id and u.id=6"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Project
app.post('/Fetchproject', function (req, res) {
    con.connect(function (err) {


        if (err) throw err;
        var a = "SELECT txtName,txtType,refProjectOwner,dtEstStartDate FROM project.tblprojects WHERE refProjectOwner=5;;"
        con.query(a, function (err, result) {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Add Project

app.post('/Insertproject', function (req, res) {
    con.connect(function (err) {


        if (err) throw err;
        var a = "INSERT INTO project.tblprojects(id,txtName,txtType,refProjectOwner,dtEstStartDate) values(8,'SOP','Operations',4,'2022-06-29');;"
        con.query(a, function (err, result) {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

app.post('/Fetchmanager', function (req, res) {
   
    var pqr=req.body.name;
    con.connect(function (err) {


        if (err) throw err;
        var a = "SELECT id,refProjectOwner FROM project.tblprojects WHERE txtName ='"+pqr+"'; ;"
        con.query(a, function (err, result) {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})
// Edit Project

app.post('/Updateproject', function (req, res) {
    con.connect(function (err) {


        if (err) throw err;
        var a = "UPDATE project.tblprojects SET txtName='PQR', txtType='!@#$',dtEstStartDate='2022-04-25' WHERE refProjectOwner=5; ;"
        con.query(a, function (err, result) {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Epic

app.post('/Fetchepiclist', function (req, res) 
{
    con.connect(function (err) 
    {
       if (err) throw err;
        var a="SELECT id,txtTitle,txtStatus FROM project.tblepic;;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Add Epic

app.post('/Insertepic', function (req, res) 
{
    con.connect(function (err) 
    {
       if (err) throw err;
        var a="INSERT INTO project.tblepic (id,refProjectId,refAssignee,txtTitle,txtStatus) values(7,4,2,'sunshine','review');;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})


// Edit Epic

app.post('/Fetchsingleepic', function (req, res) 
{ var pqr=req.body.eid;
    con.connect(function (err) 
    {
       if (err) throw err;
        var a="SELECT refProjectId,txtTitle,txtStatus FROM project.tblepic WHERE id='"+pqr+"';;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})




app.post('/Updateepic', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="UPDATE project.tblepic SET txttitle1='comb', txtDescription='all are happy!' WHERE refProjectId=3 AND refAssignee=4 ;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

app.post('/Fetchtasks', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="SELECT id,txtTitle FROM project.tbltasks;;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Task

app.post('/Fetchtasks', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="SELECT id,txtTitle FROM project.tbltasks;;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Add Task

app.post('/Inserttask', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="INSERT INTO project.tbltasks (id,refEpicid,refAssignee,txtTitle,txtDescription,txtStatus,refSprintid,dtEstStartDate) values(7,3,2,'att','this is cold','inprogress',5,'2022-06-07');;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})
app.post('/Epicfetch', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="SELECT t.id,txtName,txtTitle1,txtTitle,t.txtStatus FROM project.tblprojects p, project.tblepic e, project.tbltasks t WHERE p.id=e.id AND e.id=t.id;;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

app.post('/Sprintfetch', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="SELECT s.txtSprintName,t.txtStatus,s.dtActStartDate,s.dtActEndDate FROM  project.tblsprints s, project.tbltasks t WHERE s.id=t.id AND s.id=3;;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Edit Task

app.post('/Updatetask', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="UPDATE project.tbltasks SET txttitle='corner', txtDescription='all are bright!' WHERE refEpicid=5  ; ;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Sprint

app.post('/fetchsprintlist', function (req, res) 
{ 
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="SELECT txtSprintName FROM project.tblsprints WHERE id=1;;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Add Sprint

app.post('/Insertsprint', function (req, res) 
{ 
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="INSERT INTO project.tblsprints (id,txtSprintName,dtEstStartDate,dtEstEndDate,dtActStartDate,dtActEndDate) values(11,'bullseye','2022-06-23','2022-08-15','2022-06-20','2022-08-26');;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

app.post('/SprintwiseTaskfetch', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="SELECT s.id, s.txtSprintName,t.txtTitle FROM  project.tblsprints s, project.tbltasks t WHERE s.id=t.id AND s.id=6;;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Edit Sprint

app.post('/Updatesprint', function (req, res) {
    con.connect(function (err) {


        if (err) throw err;
        var a = "UPDATE project.tblsprints SET txtSprintName='BBB', dtEstStartDate='2022-04-26',dtEstEndDate='2022-05-25',dtActStartDate='2022-04-28',dtActEndDate='2022-05-27' WHERE id=5; ;"
        con.query(a, function (err, result) {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
            
        });
    });
})

// User

app.post('/Userfetche', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="SELECT txtUsername,txtPassword,RefUserRole FROM project.tblusers WHERE id=4;;"
    
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Add User

app.post('/Userinsert', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="INSERT INTO project.tblusers (id,txtUsername,txtPassword,refUserRole) values(7,'Supreena','supreen@',4);;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

app.post('/FetchUserRole', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="SELECT txtUserRole FROM project.tbluserroles WHERE id=4;;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})

// Edit User


app.post('/Userupdate', function (req, res) 
{
    con.connect(function (err) 
    {
       

        if (err) throw err;
        var a="UPDATE project.tblusers SET txtUsername='seal', txtPassword='se@l' WHERE refUserRole=4 ;"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})





    






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
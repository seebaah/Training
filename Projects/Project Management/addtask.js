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

app.post('/addition', function (req, res) 
{
   // console.log(req, res);
    var a = parseInt(req.body.numone);
    var b = parseInt(req.body.numtwo);
    var c = a + b;
    res.send("Result=" + c);

})

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

app.post('/Insertsprint', function (req, res) 
{
    con.connect(function (err) 
    {
       if (err) throw err;
        var a="INSERT INTO project.tblsprints (id,txtSprintName,dtEstStartDate) values(8,'apple','2022-06-29'),(9,'tomato','2022-07-02') ;"
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
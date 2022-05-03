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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
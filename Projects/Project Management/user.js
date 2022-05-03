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
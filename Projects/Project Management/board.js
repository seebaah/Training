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
        var a="SELECT txtTitle,txtStatus FROM project.tbltasks where id=4;"
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
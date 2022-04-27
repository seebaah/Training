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
app.post('/Uservalidate', function (req, res) 
{
    con.connect(function (err) 
    {

        if (err) throw err;
        var a="SELECT refUserRole FROM project.tblusers WHERE txtUsername='Lily' AND txtPassword='lily@';";
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
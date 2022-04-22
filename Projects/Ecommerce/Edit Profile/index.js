const express = require('express');
const app = express();
var mysql = require('mysql');
const port = 5050;
app.use(express.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test"
});

app.post('/addition', function (req, res) 
{
   // console.log(req, res);
    var a = parseInt(req.body.numone);
    var b = parseInt(req.body.numtwo);
    var c = a + b;
    res.send("Result=" + c);

})
app.post('/Fetchuser', function (req, res) 
{
    con.connect(function (err) 
    {

        if (err) throw err;
        var a="select id,txtUsername,txtPassword,txtFirstName,txtLastName from tblusers where txtUserType='B';";
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });

})

app.post('/Updateuser', function (req, res) 
{
    con.connect(function (err) 
    {
         var a=req.body.txtUserType;
         var b=req.body.txtUsername;
        if (err) throw err;
        var a="UPDATE tblusers SET txtUsername='"+b+"' WHERE txtUserType='"+a+"'";
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
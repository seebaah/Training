const express = require('express');
const app = express();
var mysql = require('mysql');
// const cors = require('cors');
// app.use(cors());
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
    
//    console.log(req, res);
//     var a = parseInt(req.body.numone);
//     var b = parseInt(req.body.numtwo);
//     var c = a + b;

// res.send("Result="+c);
res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
   console.log(req, res);
    
    res.send("Result");


})
app.post('/Countryfetch', function (req, res) 
{
    con.connect(function (err) 
    {

        if (err) throw err;
        var a="select id,txtCountryName from tblcountry";
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });
})
app.post('/Statefetch',function(req,res)
{ var num=req.body.countryid;
    con.connect(function(err)
    {
        if(err) throw err;
        var a="select id,txtStateName from tblstate where refCountryName='"+num+"' ";
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log(a);
            console.log("Result");
            res.send(result);
        });
    });

});


app.post('/Userinsert',function(req,res)
{
    con.connect(function(err)
    {
        if(err) throw err;
        var a="Insert into tblusers( id,txtUserType,txtUsername,txtPassword,txtFirstName,txtLastName) values(19,'A','sam','ssss@','Seam','Bark');";
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log(a);
            console.log("Result");
            res.send(result);
        });
    });

});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
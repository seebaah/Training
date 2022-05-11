const express = require('express');
const app = express();
var mysql = require('mysql');
const cors = require('cors');
app.use(cors());
const port = 8000;
app.use(express.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test"
});
// con.connect(function (err) 
// if (err) throw err;
con.connect(function(err){
if(err){ 
    console.log(err);
}else{
    console.log("Connected");
}
});
app.post('/Uservalidate', function (req, res) 
{var usrname = req.body.username;
  var passwrd = req.body.password;
    
       

       
        var a="select id,txtUsername,txtPassword from tblusers where txtUsername='"+usrname+"' and txtPassword='"+passwrd+"';"
        con.query(a, function (err, result) 
        {
            if (err) throw err;
            console.log("Result!");
            res.send(result);
        });
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
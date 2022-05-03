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
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
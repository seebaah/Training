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



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 
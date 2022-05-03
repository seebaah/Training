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

app.post('/Updatesprint', function (req, res) {
    con.connect(function (err) {


        if (err) throw err;
        var a = "UPDATE project.tblsprints SET txtSprintName='BBB', dtEstStartDate='2022-04-26',dtEstEndDate='2022-05-25',dtActStartDate='2022-04-28',dtActEndDate='2022-05-27' WHERE id=5; ;"
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
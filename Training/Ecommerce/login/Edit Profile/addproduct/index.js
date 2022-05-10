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
app.post('/Addproduct', function (req, res) 
{
    con.connect(function (err) 
    {

        if (err) throw err;
        var a="insert into tblproduct(txtProdName,txtProdPrice,refProdCategory,dtCreatedOn,dtUpdatedOn)values('ssss',5000,2,'2020-04-11','2020-04-12');";
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
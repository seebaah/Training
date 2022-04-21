const express = require('express');
const res = require('express/lib/response');
const app = express()
var mysql = require('mysql');
const port = 5050
app.use(express.json());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "world"
});
app.post('/addition', function (req, res) {
  console.log(req, res);
  var a = parseInt(req.body.numone);
  var b = parseInt(req.body.numtwo);
  var c = a + b;
  res.send("Result=" + c);
})

app.post('/Continent', function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT Code , Name , Continent FROM country;", function (err, result, field) {
      if (err) throw err;
      console.log("Result!");
      res.send(result);
    });

  });

});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
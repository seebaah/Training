const express = require('express')
const app = express()
const port = 5050
app.post('/addition',function(req,res){
    var a=12;
    var b=13;
    var c=a+b;
    res.send('Addition'+c)
    alert(c)
})

app.post ('/subtraction',function(req,res){
var a=9;
var b=8;
var c=a-b;
res.send('Subtraction'+c)
})

app.post('/multiplication',function(req,res){
var a=15;
var b=3;
var c=a*b;
res.send('Multiplication'+c)
})
app.post('/division',function(req,res){
    var a=15;
    var b=3;
    var c=a/b;
    res.send('/Division'+c)

})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
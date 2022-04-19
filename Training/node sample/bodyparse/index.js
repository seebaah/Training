const express = require('express')
const app = express()
const port = 5050
app.use(express.json());
app.post('/addition',function(req,res){
  console.log(req,res);
  var a=parseInt(req.body.numone);
  var b=parseInt(req.body.numtwo);
  var c=a+b;
})
  app.post('/numId',function(req,res){
    console.log(req,res);
    var a=parseInt(req.body.numId[0].num3);
  
  res.send("Result="+a);

})
app.post('/color',function(req,res){
  console.log(req,res);
  var a=(req.body[0]);

res.send("Result="+a);

})

app.post('/subtraction',function(req,res){
  console.log(req,res);
var a=parseInt(req.body.numone);
var b=parseInt(req.body.numtwo);
var c=a-b;
res.send("Result="+c);
  

})
app.post('/multiplication',function(req,res){
console.log(req,res);
var a=parseInt(req.body.numone);
var b=parseInt(req.body.numtwo);
var c=a*b;
res.send("Result="+c);
})

app.post('/division',function(req,res){
console.log(req,res);
var a=parseInt(req.body.numone);
var b=parseInt(req.body.numtwo);
var c=a/b;
res.send("result="+c);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
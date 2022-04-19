const express = require('express')
const app = express()
const port = 3000

app.post('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/addition', (req, res) => {
  var a=3;
  var b=5;
  var c=a+b;

    res.send('Addition!'+c)
  })
  app.post('/subtraction', (req, res) => {
    var a=5;
    var b=4;
    var c=a-b;
    res.send('Subtraction!'+c)
  })
  app.post('/multiplication', (req, res) => {
    var a=5;
    var b=4;
    var c=a*b;
    res.send('Multiplication!'+c)
  })
  app.post('/division', (req, res) => {
    var a=5;
    var b=4;
    var c=a/b;
    res.send('Division!'+c)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
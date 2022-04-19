var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  var num=5;
  var count=6;
  var result='';
  for(let i=0;i<count;i++)
  {
      for(let j=0;j<i;j++)
      {
         result+=num+' ';
      }
     result+='<br/>';
  }
  res.write(''+result); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

const express = require('express');
const app = express();
const cors = require('cors');
const mysql=require('mysql');
app.use(cors());
app.use(express.json());
const res=require('express/lib/response');
var jwt = require('jsonwebtoken');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test"
});

function verifyToken(req,res,next){
  const bearerHeader=req.headers["authorization"];
  if(typeof bearerHeader!=="undefined"){
    const bearerToken=bearerHeader.split("")[1];
    jwt.verify(bearerToken,"secretkey",(err,authData)=>{
      if(err)
      res.sendStatus(403)
      else{
        next();
      }
    })

  }else{
    res.sendStatus(403);
  }
}
// Login
con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

app.post("/Uservalidate", function (req, res) {
  var usrname = req.body.username;
  var passwrd = req.body.password;

  var a =
    "select id,txtUsername,txtPassword from tblusers where txtUsername='" +usrname +"' and txtPassword='" +passwrd +"';";
  con.query(a, function (err,result) {
    if (err) throw err;
    res.send(result);
    
if(result.length>0){
  const user=result[0];
  jwt.sign({user:user},"secret key",(err,token)=>{
    if(err)
    res.send(err)
    else{
    res.json({token:token})
  
}
})
}else{
  res.json({"token":""});


}
 
   
  });
  

});

  
// Signup

app.post("/Countryfetch", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var a = "select id,txtCountryName from tblcountry";
    con.query(a, function (err, result) {
      if (err) throw err;
      console.log("Result!");
      res.send(result);
    });
  });
});
app.post("/Statefetch", function (req, res) {
  var num = req.body.countryid;
  con.connect(function (err) {
    if (err) throw err;
    var a =
      "select id,txtStateName from tblstate where refCountryName='" +
      num +
      "' ";
    con.query(a, function (err, result) {
      if (err) throw err;
      console.log(a);
      console.log("Result");
      res.send(result);
    });
  });
});

app.post("/Userinsert", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var a =
      "Insert into tblusers( id,txtUserType,txtUsername,txtPassword,txtFirstName,txtLastName) values(19,'A','sam','ssss@','Seam','Bark');";
    con.query(a, function (err, result) {
      if (err) throw err;
      console.log(a);
      console.log("Result");
      res.send(result);
    });
  });
});

// Dashboard

app.post("/Ordercount", function (req, res) {
  var num = con.connect(function (err) {
    var a = req.body.refOrderHdr;

    if (err) throw err;
    var a =
      "SELECT COUNT(refOrderHdr='" +
      a +
      "') AS NumberOfOrders FROM tblorderchild;";
    con.query(a, function (err, result) {
      if (err) throw err;
      console.log("Result!");
      res.send(result);
    });
  });
});

// Productlist
app.post("/Productfetch", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var a = "select id,txtProdName from tblproduct;";
    con.query(a, function (err, result, field) {
      if (err) throw err;
      console.log("Result!");
      res.send(result);
    });
  });
});
// Orderlist
app.post("/Orderlist", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var a =
      "select id,txtOrderNo,txtOrderAmount,dtCreatedOn,dtUpdatedOn from tblorderhdr;";
    con.query(a, function (err, result) {
      if (err) throw err;
      console.log("Result!");
      res.send(result);
    });
  });
});
// Addproduct
app.post("/Addproduct", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var a =
      "insert into tblproduct(txtProdName,txtProdPrice,refProdCategory,dtCreatedOn,dtUpdatedOn)values('ssss',5000,2,'2020-04-11','2020-04-12');";
    con.query(a, function (err, result) {
      if (err) throw err;
      console.log("Result!");
      res.send(result);
    });
  });
});

// Editproduct
app.post("/Fetchproduct", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var a =
      "select txtProdName,txtProdPrice,refProdCategory from tblproduct where refProdCategory=1;";
    con.query(a, function (err, result) {
      if (err) throw err;
      console.log("Result!");
      res.send(result);
    });
  });
});
app.post("/Updateproduct", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var a = "UPDATE tblproduct SET txtProdName='zzzz' WHERE refProdCategory=2;";
    con.query(a, function (err, result) {
      if (err) throw err;
      console.log("Result!");
      res.send(result);
    });
  });
});

// Editprofile
app.post("/Fetchuser", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var a =
      "select id,txtUsername,txtPassword,txtFirstName,txtLastName from tblusers where txtUserType='B';";
    con.query(a, function (err, result) {
      if (err) throw err;
      console.log("Result!");
      res.send(result);
    });
  });
});

app.post("/Updateuser", function (req, res) {
  con.connect(function (err) {
    var a = req.body.txtUserType;
    var b = req.body.txtUsername;
    if (err) throw err;
    var a =
      "UPDATE tblusers SET txtUsername='" +
      b +
      "' WHERE txtUserType='" +
      a +
      "'";
    con.query(a, function (err, result) {
      if (err) throw err;
      console.log("Result!");
      res.send(result);
    });
  });
});

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
});

const express=require(express);
const app=express();
var mysql=require('mysql');
const cors=require(cors);
app.use(cors());
const port=5050;
app.use(express.json());
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"test"
});

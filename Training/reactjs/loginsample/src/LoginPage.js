import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
function LoginPage(){
  const[username,setUserName]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();

  function handleClick(e){
    e.preventDefault();
   let req={"username":username,"password":password};
   let url="http://localhost:8000/logincheck";
//    let url="http://localhost:5050/Uservalidate";
console.log("req=>"+JSON.stringify(req));
console.log("url=>"+url);
   let header={};
   axios.post(url,req,header).then((res)=>{
     console.log(res.data)
   }

   ).catch();
  //  alert(JSON.stringify(req));
  }
  function newclick(e){
    e.preventDefault();
    navigate("/signup");
  }
  return(
    <div>
      <h1>LOGIN</h1>
      <div><label>Username</label><input type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}}/></div>
      <div><label>Password</label><input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div><br/>
      {username}<br/>
      {password}<br/>
      <p className="errormessage">{errormessage}</p>
      <button onClick={(e)=>handleClick(e)}>LOGIN</button>
      <p onClick={(e)=>{newclick(e)}} className="link">New User?</p>
    </div>  
    
  )
}
export default LoginPage;
import axios from "axios";
import {useState} from "react";
import './style.css'
function LogPage(){
    const[username,setUserName]=useState('');
  const[password,setPassword]=useState('');
  const[errormessage,SetErrorMessage]=useState('');
}
  function handleClick(e){
    e.preventDefault();
   let req={"username":username,"password":password};
   
   let url="http://localhost:5050/Uservalidate";
   let header={};
   axios.post(url,req,header).then((res)=>{
    console.log(res.data)
    if(res.data.length>0){
        SetErrorMessage("Success");
    }else{
        SetErrorMessage("Error un username or password")
    }
  }

  ).catch();
    return(
        <div>
           <h1>LOGIN</h1>
      <div><label>Username</label><input type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}}/></div>
      <div><label>Password</label><input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div><br/>
      {username}<br/>
      {password}<br/>
      <button onClick={(e)=>handleClick(e)}>LOGIN</button>
      <p onClick={(e)=>{newclick(e)}} className="link">New User?</p> 
        </div>
    )
}
export default LogPage;
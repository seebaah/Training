import "./style.css";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const[username,SetUserName]=useState('');
    const[password,SetPassword]=useState('');
  const navigate = useNavigate();
  function handleClick(e){
      e.preventDefault();
      var req={"username":username,"password":password};
      var url="localhost:8000/Uservalidate"
      var header={};
  }
  axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          setErrorMessage("Success");
          navigate('/dashboard')
        } else {
          setErrorMessage("Error in Username Or Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const newClick=()=>{
    navigate('/signup')
  }
  function newclick(e) {
    e.preventDefault();
    navigate("/signup");
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
      <p className="errormessage">{errormessage}</p>
        <label>Password</label>
        <input type="password" />
      </div>
      <br />

      <button onClick={(e)=>handleClick(e)}>LOGIN</button>
      <p
        onClick={(e) => {
          newclick(e);
        }}
        className="link"
      >
        New User?
      </p>
    </div>
  );
}
export default LoginPage;

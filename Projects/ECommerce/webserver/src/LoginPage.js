import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const[username,SetUserName]=useState('');
    const[password,SetPassword]=useState('');
  const navigate = useNavigate();
  function handleClick(e){
      e.preventDefault();
      let req='{["username":username,"password":password]}';
      let url="http://localhost:5050/Uservalidate"
      let 
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

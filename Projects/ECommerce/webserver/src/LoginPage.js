import "./style.css";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const[username,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const [errormessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  function handleClick(){
   
      var req={"username":username,"password":password};
      var url="http://localhost:8000/Uservalidate"
      var header={};
  
  axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          setErrorMessage("Success");
          navigate('/dashboard');
        } else {
          setErrorMessage("Error in Username Or Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  
    }

  
 function newClick(){
   navigate("/SignUp");
 }
  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <label>Username</label>
        <input
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
        />
      </div>
      <div>
      <p className="errormessage">{errormessage}</p>
        <label>Password</label>
        <input value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}type="password" />
      </div>
      <br />

      <button onClick={handleClick}>LOGIN</button>
      <p onClick={newClick} className="newuser">NewUser?</p>
    </div>
  );
}

export default LoginPage;

import "./style.css";


function LoginPage() {
  return (
    <div>
      <h1>LOGIN</h1>
      <div><label>Username</label><input type="text"/></div>
      <div><label>Password</label><input type="password"/></div><br/>
    
    
      <button>LOGIN</button>
      <p className="link">New User?</p>
    </div>
  );
}
export default LoginPage;

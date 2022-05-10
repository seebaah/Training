import "./style.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
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

      <button>LOGIN</button>
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

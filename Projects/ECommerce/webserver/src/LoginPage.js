import "./style.css";

function LoginPage() {
  return (
    <div>
      <div class="container">
        <div class="innerdiv">
          <h2>Login</h2>
          <form class="formelement">
            <input type="text" placeholder="username" />
            <br />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <br />
            <button>login</button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

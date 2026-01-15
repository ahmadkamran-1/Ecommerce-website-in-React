import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ maxWidth: "400px", margin: "60px auto" }}>
      <h2>Login</h2>

      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <button style={{ marginTop: "15px" }}>Login</button>

      <p style={{ marginTop: "10px" }}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;

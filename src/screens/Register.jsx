import { Link } from "react-router-dom";

function Register() {
  return (
    <div style={{ maxWidth: "400px", margin: "60px auto" }}>
      <h2>Create Account</h2>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <button style={{ marginTop: "15px" }}>Register</button>

      <p style={{ marginTop: "10px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;

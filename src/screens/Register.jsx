import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";


function Register() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const navigate = useNavigate();
const handleRegister = async (e) => {
  e.preventDefault();

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/login");
  } catch (err) {
    setError(err.message);
  }
};


 return (
  <div style={{ maxWidth: "400px", margin: "60px auto" }}>
    <h2>Create Account</h2>

    <form onSubmit={handleRegister}>
      <input placeholder="Name" />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" style={{ marginTop: "15px" }}>
        Register
      </button>
    </form>

    <p style={{ marginTop: "10px" }}>
      Already have an account? <Link to="/login">Login</Link>
    </p>
  </div>
);

}

export default Register;
